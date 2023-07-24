const mongoose = require("mongoose");
const {Blogs} = require('../../schema/blogs.js');
let showdown = require('showdown');
const moment = require('moment');
const { ChatGPTAPI } = require('chatgpt-api-cjs');
let converter = new showdown.Converter();
let chat = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY
  })

module.exports = {
  name: '/post',
  method: "post",
  run: async(req, res) => {
    let blog = new Blogs();
    blog.title = req.body.title;
    req.body.content = req.body.content.replaceAll("\n\n", "<br>").replaceAll("\n", "<br><br>");
    req.body.content = converter.makeHtml(req.body.content);
    blog.content = req.body.content;
    
const titleSlug = blog.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
const dateSlug = moment(Date.now()).format('YYYY-MM-DD');
const id = `${dateSlug}-${titleSlug}`;
    blog.id = id;
   
    let des = await chat.sendMessage("Give me short description of this blog in the same style of 'Writing secure code is as much of an art as writing functional code, and it is the only way to write quality code. Learn how our Secure Code Game can provide you with hands-on training to spot and fix security issues in your code so that you can build a secure code mindset.', :\n" + blog.content);
   blog.desc = des.text;
   blog.category = req.body.ctg || "Technology";
  await res.json({ ok: true, key: blog.id });
  blog.img = req.body.img;
  await blog.save();
  }
}