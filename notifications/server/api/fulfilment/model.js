var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var fulfilmentDbSchema = new Schema({
  orderId: string,
  store: storeSchema,
  shippingInfo: shippingInfoSchema,
});

var storeSchema = new Schema({
  name: string,
  id: string
})

var shippingInfoSchema = new Schema({
  providerId: string,
  providerName: string,
  fee: Number,
})


var FulfilmentDb = mongoose.model('FulfilmentDb', fulfilmentDbSchema);

module.exports = FulfilmentDb;

