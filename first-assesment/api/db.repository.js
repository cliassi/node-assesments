let config = require('./config')
let models;// = config.getDB().get('models');


function get(collection) {
  models = config.getDB().get(collection);
  return models.value();
}

function getById(collection, id) {
  models = config.getDB().get(collection);
  const found = models.find(m => m.id == Number(id));
  return found ? found : {};
}

function create(collection, model) {
  models = config.getDB().get(collection);
  models.push(model).write();
}

function remove(collection, id) {
  models = config.getDB().get(collection);
  models.remove({ id: Number(id) }).write();
}

module.exports = {
  get,
  getById,
  create,
  remove
}