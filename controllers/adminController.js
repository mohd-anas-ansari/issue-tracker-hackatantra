var Admin = require('../models/admin');
const authController = require('./authController');

module.exports = {
  adminRegister: (req, res, next) => {
    console.log(req.body);
    Admin.create(req.body, (err, admin) => {
      if (err) return next(err);
      const accessToken = authController.generateToken(req);
      res.status(200).json({
        username: admin.username,
        email: admin.email,
        password: admin.password,
        accessToken: accessToken,
      });
    });
  },
  adminLogin: function(req, res, next) {
    const EMAIL = req.body.email;
    const PASSWORD = req.body.password;
    console.log(EMAIL, PASSWORD, 'Inside LogIn');
    Admin.findOne({ email: EMAIL }, (err, adminData) => {
      if (err) return err;
      const accessToken = authController.generateToken(req);
      res.status(200).json({
        username: admin.username,
        email: admin.email,
        password: admin.password,
        accessToken: accessToken,
      });
    });
  },
};
