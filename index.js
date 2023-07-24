const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const app = express();
const { handler } = require('express-handle');

app.use(express.static("./templetes"));
app.use(express.json({limit: "5000mb"}));
app.set("views", "./templetes");
app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_DB, autoRemove: 'disabled' }),
  cookie: { maxAge: 2553418620000 }
}));

handler(app, {
  folder: "./routes",
  notfound: (req,res) => {
    res.send("Sorry")
  },
});

app.listen(3000);