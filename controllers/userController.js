var User = require('../models/user');

module.exports = {
  userRegister: (req, res, next) => {
    console.log(req.body);
    User.create(req.body, (err, createdUser) => {
      if (err) return console.log(err);
      console.log(createdUser, 'created');
      res.status(200).json(createdUser);
    });
  },

  userLogin: function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email }, (err, userData) => {
      if (err) return err;
      console.log(userData, 'LOgged In User');
      res.status(200).json(userData);
    });
  },

  updateUser: (req, res) => {
    const id = req.params.id;
    console.log(id, 'from ID in Update');
    User.findByIdAndUpdate(id, { username: 'threeEmail' }, (err, response) => {
      if (err) return err;
      console.log(response, 'Inside Update');
      res.json(response);
    });
  },
};
