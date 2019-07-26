const db = require('../database/dbConfig');

async function addUser(userData) {
  return db('users')
    .insert(userData);
}

async function findByUsername(email) {
  return db('users').where({ email }).first();
}

async function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

module.exports = {
  addUser,
  findByUsername,
  findById,
};
