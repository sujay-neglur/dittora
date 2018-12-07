const nodemailer = require('nodemailer');
const myEmail = 'sujayneglur123@gmail.com'

const myPassword = 'qwertycs1.6';


let email = (request, response) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: myEmail,
            pass: myPassword
        }
    });

    let mailOptions = {
        from: myEmail,
        fullName: request.body.contactFullName,
        to: request.body.contactEmail,
        subject: 'Email using nodemailer',
        text: `Hello ${request.body.contactFullName}, this is an email.`,
        message: request.body.contactMessage
    };
    transporter.sendMail(mailOptions, function (error, info) {
        console.log(mailOptions);
        if (error) {
            console.log(error)
        } else {
            response.status(200).send();
            console.log(`Email sent : ${info.message}`);
        }
    })
};

module.exports = {
    email
};