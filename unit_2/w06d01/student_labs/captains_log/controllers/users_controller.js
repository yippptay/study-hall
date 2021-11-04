const bcrypt = require("bcrypt");
const express = require("express");
const users = express.Router();
const User = require("../models/users.js");

users.get("/new", (req, res) => {
  res.render("users/New");
});

users.post("/", (req, res) => {
  console.log(req.body);

  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );

  console.log(req.body);

  User.create(req.body, (err, createdUser) => {
    console.log(createdUser);
    res.redirect("/logs");
  });
});

module.exports = users;
