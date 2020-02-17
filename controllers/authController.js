require('dotenv').config();

var jwt = require('jsonwebtoken');

module.exports = {

	generateToken: req => {
		return new Promise((resolve, reject) => {
			if (!req.body.username) {
				return reject(new Error("Username required"));
			}
			jwt.sign(req.body.username, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
				if (err) return reject(err);
				resolve(token);
			});
		})
	},

	verifyToken: (req, res, next) => {
	  	const authHeader = req.headers.authorization;
	  	const token = authHeader && authHeader.split(" ")[1];
	  	if (token == null) return res.sendStatus(401);
	  	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, username) => {
	    	if (err) return res.sendStatus(403);
	    	req.body.username = username;
	    	next();
	  	});
	}
};