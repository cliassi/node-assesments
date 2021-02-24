const handlebars = require('handlebars')
const dotenv = require('dotenv')
const sgMail = require('@sendgrid/mail')

const env = dotenv.config()
sgMail.setApiKey(env.parsed.SENDGRID_API_KEY)

const msg = {
  to: 'rronyy@gmail.com', // Change to your recipient
  from: 'nesar@panacea.com.my', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

var template = handlebars.compile('hello <b>{{user.name}}</b>');

console.log(template({ user: { name: 'you!"' } }));
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })
