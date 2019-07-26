const express = require('express');
const axios = require('axios');
const Users = require('../models/userModel.js');
const {
  authenticate, encryptPassword, comparePassword, createToken,
} = require('../auth/authenticate');


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
      const tokenData = {
        id: user.id,
        username: user.username,
      };
      const token = createToken(tokenData);
      return res.status(201).json({
        message: 'User created successfully',
        token,
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
      const tokenData = {
        id: user.id,
        username: user.username,
      };
      const token = createToken(tokenData);
      return res.status(200).json({
        message: 'Login successful',
        token,
        user,
      });
    }
    return res.status(404).json({
      errorMessage: 'Bad request',
    });
  } catch (error) {
    return res.status(500).json({
      errorMessage: error,
    });
  }
}

async function getAllUsers(req, res) {
  try {
    const allUsers = await Users.find();
    return res.status(200).json(allUsers);    
  } catch (error) {
    return res.status(500).json({
      errorMessage: error,
    });
  }
}

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

module.exports = (server) => {
  server.post('/api/register', register);
  server.get('/api/users', authenticate, getAllUsers);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};


