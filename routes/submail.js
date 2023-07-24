const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: false });
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const fs = require("fs");
const trans = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});
const {User} = require('../../schema/user.js');

module.exports = {
  name: '/submail',
  method: "post",
  run: async(req, res) => {
    const token = crypto.randomBytes(20).toString('hex');
   let html = await fs.readFileSync("./templetes/emails/subscribe.txt", "utf-8");
    html = html.replaceAll("https://abdlmutii.repl.co/subscribe/userrtoken", `https://abdlmutii.repl.co/subscribe/${token}`);
    
   const newUser = new User({
    email: req.body.email,
    verificationToken: token
  });
  await newUser.save();

    const mailOptions = {
    from: process.env.EMAIL,
    to: req.body.email,
    subject: 'One more step to stay connected with our blog',
    html: html,
  };
  await trans.sendMail(mailOptions);
    res.json({ok: true})
  }
}