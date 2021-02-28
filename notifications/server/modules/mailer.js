const handlebars = require('handlebars')
const sgMail = require('@sendgrid/mail')
const dotenv = require('dotenv')

const env = dotenv.config()
sgMail.setApiKey(env.parsed.SENDGRID_API_KEY)

class Mailer {
  static async send(templateBody, data) {
    var template = handlebars.compile(templateBody);
    var body = template({ order: data });
    const msg = {
      to: data.email, // Change to your recipient
      from: 'nesar@panacea.com.my', // Change to your verified sender
      subject: data.subject,
      text: body.replace(/\n/ig, '')
        .replace(/<\/\s*(?:p|div)>/ig, '\n')
        .replace(/<br[^>]*\/?>/ig, '\n')
        .replace(/<[^>]*>/ig, '')
        .replace('&nbsp;', ' ')
        .replace(/[^\S\r\n][^\S\r\n]+/ig, ' '),
      html: body,
    }

    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
  }

}
module.exports = Mailer
