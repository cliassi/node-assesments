var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var notificationDbSchema = new Schema({
  status: Boolean,
  gatewayError: String,
  notificationName: { type: String, required: true },
  content: { type: String, required: true }
});

var NotificationDb = mongoose.model('NotificationDb', notificationDbSchema);

module.exports = NotificationDb;

