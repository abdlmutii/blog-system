const mongoose = require("mongoose");
const {Blogs} = require('../../schema/blogs.js');

module.exports = {
  name: '/',
  run: async(req, res) => {
    let blogs = await Blogs.find({});
    res.render("../templetes/blogs/blogs.ejs", { blogs: blogs.reverse(), h: blogs[0] });
  }
}
