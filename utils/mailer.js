const nodeMailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const transporterDetails = smtpTransport({
    host: "mail.mahdizargarzadeh.com",
    port: 465,
    secure: true,
    auth: {
        user: "zargarzadehmahdi0@gmail.com",
        pass: "m-123456",
    },
    tls: {
        rejectUnauthorized: false,
    },
});

exports.sendEmail = (email, fullname, subject, message) => {
    const transporter = nodeMailer.createTransport(transporterDetails);
    transporter.sendMail({
        from: "zargarzadehmahd0@gmail.com",
        to: email,
        subject: subject,
        html: `<h1> سلام ${fullname}</h1>
            <p>${message}</p>`,
    });
};
