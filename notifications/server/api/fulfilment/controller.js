const FulfilmentDb = require('./model');
const repo = require('./repository');

class Controller {
  static async get(id) {
    return repo.getById(id);
  }
  static async getByServiceRef(ref){
    return repo.getByServiceRef(ref)
  }
  static async remove(id) {
    return repo.deleteById(id)
  }
  static async save(fulfilment) {
    return repo.create(fulfilment);
  }
}

module.exports = Controller;
