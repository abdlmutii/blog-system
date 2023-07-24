const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: false });
const schema = new mongoose.Schema({
  category: { type: String, required: false, default: "Tech" },
  title: { type: String, required: true },
  desc: { type: String, required: true }, 
  img: { type: String, required: true },
  content: { type: String, required: true },
  id: { type: String, required: true },
}, { collection: 'blogs' });
const Blogs = mongoose.model('blgs', schema);

module.exports = { Blogs };