var express = require('express');
var router = express.Router();
var User = require("../models/user");

/*user.ejs page route*/
router.get('/', function(req, res, next) {
  res.render('user');
});



//Login
router.post('/login', function(req, res, next) {
  const EMAIL = req.body.email;
  const PASSWORD = req.body.password;
  console.log(EMAIL, PASSWORD, "Inside LogIn")
  User.findOne({email: EMAIL}, (err, userData) => {
    if(err) return err;
    console.log(userData, "LOgged In User")
    res.json(userData)
  })
});



//Update User
router.put("/:id", (req,res) => {
  const ID = req.params.id;
  console.log(ID, "from ID in Update")
  User.findByIdAndUpdate(ID, (err, response) => {
    if(err) return err;
    // console.log(response)
    res.json(response);
  })
})


//Register
router.post("/register", (req, res, next) => {
  console.log(req.body)
  User.create(req.body, (err, createdUser) => {
    if (err) return next(err);
    res.json(createdUser);
  });
});



module.exports = router;
