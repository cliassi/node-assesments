const handlebars = require('handlebars')
const sgMail = require('@sendgrid/mail')
const dotenv = require('dotenv')
const env = dotenv.config()

const repo = require('../api/template/repository');


sgMail.setApiKey(env.parsed.SENDGRID_API_KEY)

class Mailer {
  static async send(templateName, data) {
    repo.getByServiceRef(templateName).then(res => {
      var template = handlebars.compile(res.content);
      var body = template(data);

      const msg = {
        to: data.email,
        from: env.parsed.VERIFIED_SENDER,
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
    })

  }

}
module.exports = Mailer
