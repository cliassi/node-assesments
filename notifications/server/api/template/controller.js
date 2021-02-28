const TemplateDb = require('./model');
const repo = require('./repository');

class Controller {
  static async get(id) {
    return repo.getById(id);
  }
  static async remove(id) {
    return repo.deleteById(id)
  }
  static async save(template) {
    return repo.create(template);
  }
}

module.exports = Controller;
