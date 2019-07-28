const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

const jwtKey = process.env.JWT_SECRET || 'add a .env file to root of project with the JWT_SECRET variable';

// quickly see what this file exports


// implementation details
function authenticate(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({
      message: 'Access denied, you must be logged in to access this resource',
    });
  } else {
    jwt.verify(token, jwtKey, (err, decodedToken) => {
      if (err) {
        res.status(401).json({
          errorMessage: 'Invalid token!',
        });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  }
}

function encryptPassword(pwd) {
  return bcrypt.hashSync(pwd, bcrypt.genSaltSync(14));
}

function comparePassword(encryptedPwd, pwd) {
  return bcrypt.compareSync(encryptedPwd, pwd);
}

function createToken(payload) {
  const token = jwt.sign({
    payload,
  },
  process.env.JWT_SECRET, { expiresIn: '1d' });
  return token;
}


module.exports = {
  authenticate,
  encryptPassword,
  comparePassword,
  createToken,
};
