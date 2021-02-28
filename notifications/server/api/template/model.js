var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var templateDbSchema = new Schema({
  serviceRef: { type: String, required: true },
  templateName: { type: String, required: true },
  content: { type: String, required: true }
});

var TemplateDb = mongoose.model('TemplateDb', templateDbSchema);

module.exports = TemplateDb;

