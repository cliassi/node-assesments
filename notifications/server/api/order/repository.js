const OrderDb = require('./model');
const redis = require('redis');
const publisher = redis.createClient();

class Repository {
  static async get() {
    return OrderDb.find().then((orders) => {
      return orders
    })
  }

  static async getById(id) {
    return OrderDb.findById(id).then((order) => {
      return order
    })
  }

  static async getByServiceRef(ref) {
    return OrderDb.findOne({ serviceRef: ref }).then((order) => {
      return order
    })
  }

  static async create(order) {
    var data = new OrderDb(order);
    publisher.publish("order-service", JSON.stringify(order))
    return data.save();
  }

  static async update(id, order) {
    return OrderDb.findById(id, function (err, doc) {
      if (err) {
        console.error(err)
        return err;
      }
      doc = {...order}
      doc.save();
    })
  }

  static async deleteById(id) {
    return OrderDb.findByIdAndRemove(id).exec();
  }
}

module.exports = Repository;

