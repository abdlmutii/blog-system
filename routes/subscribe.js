const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: false });
const {User} = require("../../schema/user.js");

module.exports = {
  name: "/subscribe/:token",
  run: async(req, res) => {
    const { token } = req.params;

  const user = await User.findOne({ verificationToken: token });

  if (!user) {
    return res.status(404).send('Invalid verification token.');
  }

  user.emailVerified = true;
  await user.save();
  res.send(`
  <!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Thanks for subscribing!</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5;">
	<h1>Thanks for subscribing!</h1>
	<p>Thank you for subscribing to my blog feed. You will now receive updates whenever I publish new content.</p>
</body>
</html>
  `)
  }
}