var express = require('express');
var router = express.Router();
var User = require('../models/user');

/*user.ejs page route*/
router.get('/', function(req, res, next) {
  res.render('user');
});

//Register
router.post('/register', (req, res, next) => {
  console.log(req.body);
  User.create(req.body, (err, createdUser) => {
    if (err) return next(err);
    res.status(200).json(createdUser);
  });
});

//Login
router.post('/login', function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email }, (err, userData) => {
    if (err) return err;
    console.log(userData, 'LOgged In User');
    res.status(200).json(userData);
  });
});

//Update User
router.put('/:id', (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(id, (err, updatedUser) => {
    if (err) return err;
    res.status(200).json(updatedUser);
  });
});

module.exports = router;
