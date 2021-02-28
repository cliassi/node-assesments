const NotificationDb = require('./model');

class Repository {
  static async get() {
    return NotificationDb.find().then((notifications) => {
      return notifications
    })
  }

  static async getById(id) {
    return NotificationDb.findById(id).then((notification) => {
      return notification
    })
  }

  static async create(notification) {
    var data = new NotificationDb(notification);
    return data.save();
  }

  static async update(id, notification) {
    return NotificationDb.findById(id, function (err, doc) {
      if (err) {
        console.error(err)
        return err;
      }
      doc.serviceRef = notification.serviceRef;
      doc.notificationName = notification.notificationName;
      doc.content = notification.content;
      doc.save();
    })
  }

  static async deleteById(id) {
    return NotificationData.findByIdAndRemove(id).exec();
  }
}

module.exports = Repository;

