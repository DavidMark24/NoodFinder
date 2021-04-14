const nodemailer = require('nodemailer');

const sendEmail = (resetLink) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'noodfinder@gmail.com',
          pass: 'sendnoods'
        }
      });
    
      let forgotPasswordHTML = `<p>Click this <a href=${resetLink}>link</a> to change your password.</p>`
      
      let mailOptions = {
        from: 'noodfinder@gmail.com',
        to: 'ankushchalla@gmail.com',
        subject: 'Sending Email using Node.js',
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