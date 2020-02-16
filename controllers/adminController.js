var Admin = require('../models/admin');
const authController = require('./authController');

module.exports = {
  adminRegister: (req, res, next) => {
    console.log(req.body);
    Admin.create(req.body, (err, admin) => {
      if (err) return next(err);
      const accessToken = authController.generateToken(req.body.email);
      console.log(admin, accessToken, 'admin');
      res.status(200).json({
        username: admin.username,
        email: admin.email,
        password: admin.password,
        accessToken: accessToken,
      });
    });
  },
  adminLogin: function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    Admin.findOne({ email }, (err, adminData) => {
      if (err) return console.log(err);
      // const accessToken = authController.generateToken(req);
      const token = authController.generateToken(email);
      return res.status(200).json({ adminData, token });
    });
  },
};
