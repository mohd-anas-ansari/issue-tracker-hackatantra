var express = require('express');
var router = express.Router();
var Admin = require("../models/admin");
var adminController = require('../controllers/adminController');

/*\ GET users listing. */
 router.get('/', function(req, res, next) {
   res.render('admin');
});


//Register as Admin
router.post("/register", adminController.adminRegister);

//Login at Admin
router.post('/login', adminController.adminLogin);


module.exports = router;