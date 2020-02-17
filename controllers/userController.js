var Issue = require('../models/issue');
const User = require('../models/user');
const authController = require('./authController');

module.exports = {
  userRegister: (req, res, next) => {
    console.log("Trying to register user", req.body);
    authController.generateToken(req)
    	.then(token => {
    		User.create(req.body, (err, user) => {
      			if (err) return res.sendStatus(400);
				res.status(200).json({
			        username: user.username,
			        email: user.email,
			        accessToken: token,
				});
			});
    	})
    	.catch(err => {
    		console.log(err);
    		res.sendStatus(400);
    	});
  },

  userLogin: function(req, res, next) {
  	console.log("Trying to login user", req.body);
	authController.generateToken(req)
		.then(token => {
			const username = req.body.username;
		    const password = req.body.password;
		    User.findOne({ username, password }, (err, user) => {
		      if (err) return next(err);
		      res.status(200).json({
		        username: user.username,
		        email: user.email,
		        accessToken: token,
		      });
		    });
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(400);
		});
    
  },

  updateUser: (req, res) => {
    const id = req.params.id;
    console.log(id, 'from ID in Update');
    User.findOneAndUpdate(
      { username: id },
      { password: 'something' },
      { new: true },
      (err, response) => {
        if (err) return err;
        console.log(response, 'Inside Update');
        res.json(response);
      },
    );
  },
};
