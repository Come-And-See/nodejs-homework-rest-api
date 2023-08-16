const nodemailer = require("nodemailer");

const { META_PASSWORD } = process.env;

const nodemailerCongig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "comeandsee@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerCongig);

const sendEmail = async (data) => {
  const email = { ...data, from: "comeandsee@meta.ua" };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
