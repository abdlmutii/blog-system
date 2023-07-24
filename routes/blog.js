const mongoose = require("mongoose");
const {Blogs} = require('../../schema/blogs.js');

module.exports = {
  name: "/blog/:id",
  run: async(req, res) => {
    let blog = await Blogs.findOne({ id: req.params.id });
    if(!blog) return res.redirect("/");
    let { title,content,desc,img, category } = blog;
   res.render("blogs/blog.ejs", { title, content, img, desc, category });
  }
}