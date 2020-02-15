var express = require('express');
var router = express.Router();
var User = require('../models/user');
var userController = require('../controllers/userController');


/*user.ejs page route*/
router.get('/', function(req, res, next) {
  res.render('user');
});

//Register
router.post('/register', userController.userRegister);

//Login
router.post('/login', userController.userLogin);

//Update User
router.put("/:id", userController.updateUser)

// Delete User
router.delete("/", userController.deleteUser);


module.exports = router;



//This means that it is real one