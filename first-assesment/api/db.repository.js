let config = require('./config')
let models;


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

function update(collection, model){
  models = config.getDB().get(collection);
  models.find({id: model.id}).assign({name: model.name}).write();
}

module.exports = {
  get,
  getById,
  create,
  remove,
  update
}