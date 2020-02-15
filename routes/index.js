var express = require('express');
var router = express.Router();
var Issue = require("../models/issue");

//For /
router.get('/', function(req, res, next) {
  res.render('index');
});


module.exports = router;
