var Admin = require('../models/admin');
const authController = require('./authController');

module.exports = {
  adminRegister: (req, res) => {
    console.log("Trying to register admin", req.body);
    authController.generateToken(req)
      .then(token => {
        Admin.create(req.body, (err, admin) => {
          if (err) return res.sendStatus(400);
          res.status(200).json({
            username: admin.username,
            email: admin.email,
            accessToken: token,
          });
        });
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  adminLogin: function(req, res) {
    console.log("Trying to login admin", req.body);
    authController.generateToken(req)
    .then(token => {
      const username = req.body.username;
      const password = req.body.password;
      Admin.findOne({ username, password }, (err, admin) => {
        if (err) return res.sendStatus(400);
        res.status(200).json({
          username: admin.username,
          email: admin.email,
          accessToken: token,
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    });
  },
};
