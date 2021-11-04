const express = require("express");
const logController = express.Router();
const Logs = require("../models/logs.js");
const show = console.log;

const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next();
  } else {
    res.redirect("/sessions/new");
  }
};

//Index Route
logController.get("/", isAuthenticated, (req, res) => {
  const thisRunsNext = (error, allLogs) => {
    show("i ran after");
    if (error) {
      show(error);
    } else {
      const props = {
        logs: allLogs,
        username: req.session.currentUser,
      };
      res.render("Index", props);
    }
  };
  Logs.find({}, thisRunsNext);
});

//New Route
logController.get("/new", (req, res) => {
  res.render("New");
});

//Show Route
logController.get("/:id", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Logs.findById(req.params.id, (error, foundLogs) => {
    if (error) {
      show(error);
    } else {
      res.render("Show", {
        logs: foundLogs,
      });
    }
  });
});

//Create Route
logController.post("/", (req, res) => {
  console.log(req.body);
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Logs.create(req.body, (error, createdLog) => {
    if (error) {
      show(error);
    } else {
      res.redirect("/logs");
    }
  });
});

//Edit Route
logController.get("/edit/:id", (req, res) => {
  Logs.findById(req.params.id, (error, foundLogs) => {
    res.render("Edit", {
      logs: foundLogs,
    });
  });
});

//Update Route
logController.put("/edit/:id", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Logs.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
    res.redirect("/logs");
  });
});

//Delete Route
logController.delete("/:id", (req, res) => {
  Logs.findByIdAndRemove(req.params.id, (error, data) => {
    res.redirect("/logs");
  });
});

//Export
module.exports = logController;
