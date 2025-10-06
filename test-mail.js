import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "karasuheda28@gmail.com",
    pass: "svgw imgn ivry vqav",
  },
});

transporter.sendMail({
  from: '"Test" <karasuheda28@gmail.com>',
  to: "karasuheda28@gmail.com",
  subject: "Test Mail",
  text: "Bu bir testtir.",
}, (err, info) => {
  if (err) {
    console.error("Mail gönderme hatası:", err);
  } else {
    console.log("Mail gönderildi:", info.response);
  }
});