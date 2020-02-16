var express = require('express');
var router = express.Router();
var User = require('../models/user');
var userController = require('../controllers/userController');
var authController = require("../controllers/authController");

/*user.ejs page route*/
router.get('/', function(req, res, next) {
  res.render('user');
});

//Register
router.post('/register', userController.userRegister);

//Login
router.post('/login', userController.userLogin);

// Authenticate token first
router.use(authController.verifyToken);

//Update User
router.put("/:id", userController.updateUser)


module.exports = router;



//This means that it is real one