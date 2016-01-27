/**
 *
 */

"use strict";

var express = require("express");
var router = express.Router();

var debug = require("debug")("restaurang");



// dinner/login
router.get("/", function(req, res) {
    debug("Got GET to dinner/login");
    res.send("You don´t GET it!");
});

// dinner/login
router.post("/", function(req, res) {
    debug("Got POST to dinner/login");

    var username = req.body.username;
    var password = req.body.password;

    if (username !== "zeke" || password !== "coys") {
        return res.sendStatus(403);
    }

    // set cookie
    req.session.loggedIn = true;

    res.redirect("login/booking");

});

router.get("/booking", function(req, res) {
  debug("Should check session");
  debug(req.session);
  if(!req.session.loggedIn) {
    return res.sendStatus(401);
  }
  res.render("restaurang/booking", {layout: false});
});

router.post("/booking", function(req, res) {
  debug("Should check csrf and session");
  debug(req.session);
  if(!req.session.loggedIn) {
    return res.sendStatus(401);
  }
  debug(req.body.csrf_token);
  if(req.body.csrf_token !== "Jishgeny6753ydiayYHSjay0918") {
    return res.status(400).send("Must provied the value of the csrf_token");
  }
  res.render("restaurang/thanks");
});

module.exports = router;
