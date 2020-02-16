var Admin = require('../models/admin');

module.exports = {
  adminRegister: (req, res, next) => {
    console.log(req.body);
    Admin.create(req.body, (err, createdAdmin) => {
      if (err) return next(err);
      res.json(createdAdmin);
      res.json(Admin);
    });
  },
  adminLogin: function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    Admin.findOne({ email }, (err, adminData) => {
      if (err) return err;
      console.log(adminData, 'Logged In Admin');
      res.json(adminData);
    });
  },
};
