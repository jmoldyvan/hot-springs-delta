var mailer = require('nodemailer');

var mailConfig = {
service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  }
};

var transporter = mailer.createTransport(mailConfig);

module.exports = transporter;