const nodemailer = require("nodemailer");


exports.postContact = (req, res, next) => {
    const contactEmail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "westcoasthotsprings@gmail.com",
          pass: "awcrwhhqduomrbps",
        },
      });
      contactEmail.verify((error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Ready to Send");
        }
      });
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "westcoasthotsprings@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  }