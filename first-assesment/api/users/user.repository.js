let repo = require('../db.repository')
const collection = "users"


function getUsers() {
  return repo.get(collection);
}

function getUserById(id) {
  return repo.getById(collection,id);
}

function createUser(user) {
  repo.create(collection, user);
}

function updateUser(product) {
  repo.update(collection, product);
}

function deleteUserById(id) {
  repo.remove(collection, id);
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserById
}