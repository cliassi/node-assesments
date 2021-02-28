const NotificationData = require('./schema');

class Controller {
  static async getUser(id) {
    return {id};
    var item = {
      subject: 'C @ ' + new Date().toString(),
      content: 'Email body'
    }

    var data = new NotificationData(item);
    data.save();

    NotificationData.findById('603490ba3e9f6effa4cb786d', function (err, doc) {
      if (err) {
        console.error(err)
      }
      doc.subject = 'U @' + new Date().toString()

      doc.save();
    })

    // NotificationData.findByIdAndRemove('6034981f316690a3701cc176').exec();

    // return NotificationData.find().then((doc) => {
    //   NotificationData.findByIdAndRemove(doc[doc.length - 1]._id).exec();
    //   return doc
    // })
    // return {
    //   name: 'Notifications',
    //   role: 'admin',
    //   actions: ['profile', 'settings'],
    // };
  }
}

module.exports = Controller;
