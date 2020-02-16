var Issue = require("../models/issue");
const User = require("../models/user");
const authController = require("./authController");

module.exports = {
	userRegister: (req, res, next) => {
		console.log(req.body);
		User.create(req.body, (err, user) => {
			if (err) return next(err);
			const accessToken = authController.generateToken(req);
			res.status(200).json({
				username: user.username,
				email: user.email,
				password: user.password,
				accessToken: accessToken
			});
		});
	},

	userLogin: function(req, res, next) {
		const email = req.body.email;
		const password = req.body.password;
		User.findOne({ email, password }, (err, user) => {
			if (err) return next(err);
			const accessToken = authController.generateToken(req);
			res.status(200).json({
				username: user.username,
				email: user.email,
				password: user.password,
				accessToken: accessToken
			});
		});
	},

	updateUser: (req, res) => {
		const id = req.params.id;
		console.log(id, "from ID in Update");
		User.findOneAndUpdate({username: id}, { password: "something" }, {new: true}, (err, response) => {
			if (err) return err;
			console.log(response, "Inside Update");
			res.json(response);
		});
	}
};
