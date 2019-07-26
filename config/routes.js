const express = require('express');
const axios = require('axios');
const Users = require('../models/userModel.js');
const { authenticate, encryptPassword, comparePassword } = require('../auth/authenticate');
//const server = express.Router()

async function register(req, res) {
  // implement user registration
  let { username, password } = req.body;
  password = encryptPassword(password);
  const newUserData = {
    username, password,
  };
  try {
    const [newUser] = await Users.addUser(newUserData);
    const user = await Users.findById(newUser);
    if (user) {
      return res.status(201).json({
        message: 'User created successfully',
        user,
      });
    }
    return res.status(400).json({
      errorMessage: 'Bad request',
    })
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
}

async function login(req, res) {
  // implement user login
  const { username, password } = req.body;
  try {
    const user = await Users.findByUsername(username);
    if (user && comparePassword(password, user.password)) {
      return res.status(200).json({
        user,
      });
    }
    return res.status(404).json({
      errorMessage: 'Bad request',
    });
  } catch (error) {
    res.status(500).json({
      errorMessage: error,
    });
  }
}

module.exports = (server) => {
  server.post('/api/register', register);

  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then((response) => {
      res.status(200).json(response.data.results);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
