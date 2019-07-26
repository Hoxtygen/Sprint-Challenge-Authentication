const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const configureRoutes = require('../config/routes.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// server.use('/api', configureRoutes);
server.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to node authentication and testing sprint challenge',
  });
});

 configureRoutes(server);

module.exports = server;
