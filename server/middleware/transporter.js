var mailer = require('nodemailer');

var mailConfig = {
  port: 465,               // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  }
};

var transporter = mailer.createTransport(mailConfig);

module.exports = transporter;