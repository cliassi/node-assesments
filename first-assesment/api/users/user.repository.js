let repo = require('../db.repository')


function getUsers() {
  return repo.get("users");
}

function getUserById(id) {
  return repo.getById("users",id);
}

function createUser(user) {
  repo.create("users", user);
}

function deleteUserById(id) {
  repo.remove("users", id);
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUserById
}