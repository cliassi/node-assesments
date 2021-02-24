var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var notificationSchema = new Schema({
  subject: { type: String, required: true },
  content: String
});

var NotificationData = mongoose.model('NotificationData', notificationSchema);

module.exports = NotificationData;
