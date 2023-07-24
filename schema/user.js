const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: false });
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  verificationToken: { type: String, required: true },
  emailVerified: { type: Boolean, default: false }
});
const User = mongoose.model('User', userSchema);

module.exports = { User };