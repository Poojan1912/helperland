var nodemailer = require('nodemailer');

const SendMail = async (mail, subject, text) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'archanpandya175@gmail.com',
            pass: 'Pandya@17504',
        }
    });

    var mailOptions = {
        from: 'archanpandya175@gmail.com',
        to: mail,
        subject: subject,
        text: text
    };

    await transporter.sendMail(mailOptions, await function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = SendMail;