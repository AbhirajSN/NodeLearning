var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');
var product = require('./user');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8003;
var router = express.Router();

mongoose.connect('mongodb://localhost:27017/products');

// Middle Route 

router.use(function (req, res, next) {
    // do logging 
    // do authentication 
    console.log('Logging of request will be done here');
    next(); // make sure we go to the next routes and don't stop here
});


router.route('/users').post(function (req, res) {
    console.log("in add");
    var u = new user();
    u.name = req.body.name;
    u.phone = req.body.address;
    u.city = req.body.city;
    u.state = req.body.state;
    u.pincode = req.body.pincode;
    u.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send({ message: 'User created' });
    }
    );

});


app.use(cors());
app.use('/api', router);
app.listen(port);
console.log('REST API is runnning at ' + port);