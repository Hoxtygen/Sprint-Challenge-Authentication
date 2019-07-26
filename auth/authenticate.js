const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const jwtKey =
  process.env.JWT_SECRET ||
  'add a .env file to root of project with the JWT_SECRET variable';

// quickly see what this file exports


// implementation details
function authenticate(req, res, next) {
  const token = req.get('Authorization');

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header',
    });
  }
}

function encryptPassword(pwd) {
  return bcrypt.hashSync(pwd, bcrypt.genSaltSync(14));
}

function comparePassword(encryptedPwd, pwd) {
  return bcrypt.compareSync(encryptedPwd, pwd);
}


module.exports = {
  authenticate,
  encryptPassword,
  comparePassword,
};
