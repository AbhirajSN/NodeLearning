var express = require('express');
var app = express();
var mw = require('./my-middleware.js')


var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
};

// app.use(requestTime);

app.use(mw({ option1: '1', option2: '2' }))

app.get('/', function (req, res) {
    var responseText = 'Hello World!<br>'
    responseText += '<small>Requested at: ' + req.option1 + '</small>'
    res.send(responseText)
})

app.listen(3000)
console.log('REST API is runnning at ' + 3000);

