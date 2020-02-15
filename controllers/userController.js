var Issue = require("../models/issue");

module.exports = {
    userRegister: (req, res, next) => {
        console.log(req.body);
        User.create(req.body, (err, createdUser) => {
          if (err) return next(err);
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

    updateUser: (req,res) => {
        const id = req.params.id;
        console.log(id, "from ID in Update")
        User.findByIdAndUpdate(id, { username: "threeEmail"},(err, response) => {
          if(err) return err;
          console.log(response, "Inside Update")
          res.json(response);
        })
      },

    /**
	 * Delete user from the database. Pass username in a JSON object.
	 */
	deleteUser: (req, res) => {
		const username = req.body.username;
		console.log(username, "Username to be deleted");
		User.findOneAndRemove({ username: username }, (err, response) => {
			if (err) return err;
			console.log(response, `User with username ${username} deleted`);
			res.json(response);
		});
	}
}