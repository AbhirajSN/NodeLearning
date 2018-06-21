var express = require('express');
var app = express();
var router = express.Router();

// app.use(function (req, res, next) {
//   console.log('Time:', Date.now())
//   next()
// })

// router.use(function (req, res, next) {
//     console.log('Time:', Date.now())
//     next()
//   })

// router.use(function (req, res, next) {
//     if (!req.headers['x-auth']) return next('router')
//     next()
//   })

// -----------router-----
//   router.get('/', function (req, res) {
//     res.send('hello, user!')
//   })

//   app.use('/admin', router, function (req, res) {
//     res.sendStatus(401)
//   })

  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('something end');
    // res.sendStatus(401)
  })

// --------rotuer ends-----------

// app.use('/user', function(req, res, next) {
//     console.log('requested type: ', req.method);
//     console.log('Time:', Date.now())
//     next();
// },
// function(req, res, next) {
//     console.log('Original url: ', req.originalUrl);
//     next();
// })

// app.get('/user', function (req, res, next) {
//     console.log('ID:', req)
//     next()
//   }, function (req, res, next) {
//     res.send('User Info')
//   })

// app.get('/user/:id' , function(req, res, next) {
//     if(req.params.id === '0') next('route');
//     else next();    
// },function( req, res, next){
//     res.render('regular');    
// });

// app.get('/user/:id' , function(req, res, next) {
//     res.render('special');
// }) 

app.listen(8001)
console.log('REST API is runnning at ' + 8001);