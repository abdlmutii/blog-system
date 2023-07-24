module.exports = {
  name: "/post",
  run: (req, res) => {
    if(req.session.admin) {
      res.render("blogs/publish.ejs");
    } else {
      res.send("Can't find me page");
    }
  }
}