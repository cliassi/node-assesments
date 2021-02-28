const TemplateDb = require('./model');

class Repository {
  static async get() {
    return TemplateDb.find().then((templates) => {
      return templates
    })
  }

  static async getById(id) {
    return TemplateDb.findById(id).then((template) => {
      return template
    })
  }

  static async create(template) {
    var data = new TemplateDb(template);
    return data.save();
  }

  static async update(id, template) {
    return TemplateDb.findById(id, function (err, doc) {
      if (err) {
        console.error(err)
        return err;
      }
      doc.serviceRef = template.serviceRef;
      doc.templateName = template.templateName;
      doc.content = template.content;
      doc.save();
    })
  }

  static async deleteById(id) {
    return NotificationData.findByIdAndRemove(id).exec();
  }
}

module.exports = Repository;

