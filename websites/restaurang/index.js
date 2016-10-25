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
    req.session.regenerate(function() {
        // Store the email address in the session store.
        req.session.loggedIn = true;
        res.redirect("login/booking");
    });




});

router.get("/booking", function(req, res) {
  if(!req.session.loggedIn) {
    return res.sendStatus(401);
  }
  res.render("restaurang/booking", {layout: false});
});

router.post("/booking", function(req, res) {
  if(!req.session.loggedIn) {
    return res.sendStatus(401);
  }
  req.session.destroy();
  res.render("restaurang/thanks");
});

module.exports = router;
