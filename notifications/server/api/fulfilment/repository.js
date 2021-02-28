const FulfilmentDb = require('./model');
const redis = require('redis');
const publisher = redis.createClient();

class Repository {
  static async get() {
    return FulfilmentDb.find().then((fulfilments) => {
      return fulfilments
    })
  }

  static async getById(id) {
    return FulfilmentDb.findById(id).then((fulfilment) => {
      return fulfilment
    })
  }

  static async getByServiceRef(ref) {
    return FulfilmentDb.findOne({ serviceRef: ref }).then((fulfilment) => {
      return fulfilment
    })
  }

  static async create(fulfilment) {
    var data = new FulfilmentDb(fulfilment);
    publisher.publish("fulfilment-service", JSON.stringify(fulfilment))
    return data.save();
  }

  static async update(id, fulfilment) {
    return FulfilmentDb.findById(id, function (err, doc) {
      if (err) {
        console.error(err)
        return err;
      }
      doc = {...fulfilment}
      doc.save();
    })
  }

  static async deleteById(id) {
    return FulfilmentDb.findByIdAndRemove(id).exec();
  }
}

module.exports = Repository;

