const nodemailer = require("nodemailer");
const debugEmail = require("debug")("app:email");

let config = null;

const sendEmail = (options) => {
  if (process.env.NODE_ENV === "development") {
    config = {
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    };
  } else {
    config = {
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    };
  }

  const transporter = nodemailer.createTransport(config);

  const mailOptions = {
    from: "virgilioestadillogervacio@gmail.com",
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  transporter.sendMail(mailOptions, function (err) {
    if (err) debugEmail(err);
  });
};

module.exports = sendEmail;
