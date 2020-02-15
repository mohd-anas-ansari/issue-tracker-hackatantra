var Admin = require("../models/admin");

module.exports = { 
    adminRegister: (req, res, next) => {
        console.log(req.body)
        Admin.create(req.body, (err, createdAdmin) => {
          if (err) return next(err);
          res.json(createdAdmin);
          res.json(Admin)
        });
    },
    adminLogin: function(req, res, next) {
        const EMAIL = req.body.email;
        const PASSWORD = req.body.password;
        console.log(EMAIL, PASSWORD, "Inside LogIn")
        Admin.findOne({email: EMAIL}, (err, adminData) => {
          if(err) return err;
          console.log(adminData, "LOgged In Admin")
          res.json(adminData)
        })
      }

}