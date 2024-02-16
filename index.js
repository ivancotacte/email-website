const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/email/:test", (req, res) => {
  res.send(`Email: ${req.params.test}`);

  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: "465",
    secure: true,
    logger: true,
    debug: true,
    secureConnection: false,
    auth: {
      user: "cotactearmenion@gmail.com",
      pass: "htsf fsuz esya mbix",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: '"GROUP 10 - LFSA322N002 👻" <cotactearmenion@gmail.com>',
    to: req.params.test,
    subject: "TEST TEST TEST TEST TEST",
    text: `TEST TEST TEST TEST TEST`,
    html: "<b>Hello world?</b>"
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Message sent: %s", info.messageId);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});