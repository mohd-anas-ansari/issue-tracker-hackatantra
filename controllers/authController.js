require('dotenv').config();

var jwt = require('jsonwebtoken');

module.exports = {
  generateToken: req => jwt.sign(req, process.env.ACCESS_TOKEN_SECRET),

  verifyToken: (req, res, next) => {
    var token = req.headers.authorization || '';
    if (token) {
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, result) => {
        if (err) res.json({ token: 'Token Not Matched' });
        next();
      });
    } else {
      return res.json({ token: 'Token Not Found' });
    }
  },
};
