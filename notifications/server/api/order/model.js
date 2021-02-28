var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var orderDbSchema = new Schema({
  customer: customerSchema,
  items: [itemSchema],
  extra: orderExtraSchema,
});

var customerSchema = new Schema({
  id: string,
  firstName: string,
  lastName: string,
  address: addressSchema,
  shippingAddress: addressSchema
})

var addressSchema = new Schema({
  address: string,
  country: string,
  state: string,
  postCode: string,
  phoneNumber: string,
})

var itemSchema = new Schema({
  id: string,
  name: string,
  quantity: string,
  store: storeSchema,
  unitPrice: string,
  details: string,
})

var storeSchema = new Schema({
  name: string,
  id: string
})

var orderExtraSchema = new Schema({
  discount: number,
  vat: number,
  shippingInfo: shippingInfoSchema,
})

var shippingInfoSchema = new Schema({
  providerId: string,
  providerName: string,
  fee: Number,
})

var OrderDb = mongoose.model('OrderDb', orderDbSchema);

module.exports = OrderDb;

