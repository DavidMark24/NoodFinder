const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = (resetLink, emailAddress) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'noodfinder@gmail.com',
          pass: process.env.PASSWORD
        }
      });
    
      let forgotPasswordHTML = `<p>Click this <a href=${resetLink}>link</a> to change your password.</p>`
      
      let mailOptions = {
        from: 'noodfinder@gmail.com',
        to: emailAddress,
        subject: 'Only Foods: Reset Password',
        html: forgotPasswordHTML
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

module.exports = sendEmail;