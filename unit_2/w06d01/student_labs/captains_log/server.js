//Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = mongoose.connection;
const show = console.log;
const Logs = require("./models/logs.js");
const methodOverride = require("method-override");
const logController = require("./controllers/logs.js");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const mongodbURI = process.env.MONGODBURI;
const userController = require("./controllers/users_controller.js");
const bcrypt = require("bcrypt");
const User = require("./models/users.js");
const session = require("express-session");

//Middleware
app.use(express.static("public"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(methodOverride("_method"));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.urlencoded({ extended: true }));

//Controllers
app.use("/logs", logController);
app.use("/user", userController);

//Mongoose Connection
mongoose.connect(mongodbURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: true,
});
db.once("open", () => {
  show("everything is awesome");
});

const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next();
  } else {
    res.redirect("/sessions/new");
  }
};

//LOGIN PAGE
app.get("/sessions/new", (req, res) => {
  res.render("sessions/New", {
    currentUser: req.session.currentUser,
  });
});

//AUTHENTICATION ROUTE
app.post("/sessions/", (req, res) => {
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (err) {
      res.send(err);
    } else if (!foundUser) {
      res.redirect("/user/new");
    } else {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.currentUser = foundUser.username;
        res.redirect("/logs");
      } else {
        res.send("WRONG PASSWORD");
      }
    }
  });
});

app.delete("/sessions/", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/sessions/new");
  });
});

//Listener
app.listen(3000, () => {
  console.log("listening");
});
