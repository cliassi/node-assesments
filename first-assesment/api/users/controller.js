let userRepository = require('./user.repository');

function getUsers() {
  return userRepository.getUsers();
}

function getUser(id) {
  return userRepository.getUserById(id);
}

function createUser(user) {
  return userRepository.createUser(user);
}

function updateUser(user) {
  return userRepository.updateUser(user);
}

function deleteUser(id) {
  return userRepository.deleteUserById(id);
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
};
