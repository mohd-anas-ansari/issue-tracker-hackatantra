require('dotenv').config();

var jwt = require('jsonwebtoken');

module.exports = {

	generateToken: req => jwt.sign(req.body.username, process.env.ACCESS_TOKEN_SECRET),

	verifyToken: (req, res, next) => {
		const username = req.body.username;
	  	const authHeader = req.headers['authorization'];
	  	const token = authHeader && authHeader.split(" ")[1];
	  	if (token == null) return res.sendStatus(401);
	  	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, result) => {
	    	if (err || username !== result) return res.sendStatus(403);
	    	next();
	  	});
	}
};