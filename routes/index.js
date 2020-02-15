var express = require('express');
var router = express.Router();

//For /
router.get('/', function(req, res, next) {
  res.render('index');
});


//For /index
router.get('/index', function(req, res, next) {
  res.send('index Route');
});

module.exports = router;
