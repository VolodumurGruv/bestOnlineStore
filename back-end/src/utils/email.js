import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: `${process.env.MAILER_HOST}`,
  port: Number(`${process.env.MAILER_PORT}`),
  secure: false,
  requireTLS: true,
  logger: true,
  debug: false,
  auth: {
    user: `${process.env.MAILER_EMAIL}`,
    pass: `${process.env.MAILER_PASS}`
  }
});

const sendEmail = (email, subject, text) => {
  const mailOptions = {
    from: `${process.env.MAILER_EMAIL}`,
    to: email,
    subject: subject || 'Ласкаво просимо до нашого магазину',
    text: text || 'Дякуємо за реєстрацію у нашому магазині!'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('An error occurred when sending the letter: ', error);
    } else {
      console.log('The letter has been sent: ', info.response);
    }
  });
};

export default sendEmail;
