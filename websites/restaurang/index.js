/**
 *
 */

"use strict";

var express = require("express");
var router = express.Router();
var debug = require("debug")("restaurang");

// dinner/login
router.get("/", function(req, res) {
    debug("Got POST to dinner/login");
    res.send("You don´t GET it!");
});

router.post("/", function(req, res) {
    debug("Got POST to dinner/login");
    var username = req.body.username;
    var password = req.body.password;
    var time = req.body.group1;

    if (username !== "zeke" || password !== "coys") {
        return res.sendStatus(403);
    }

    if (time === undefined || time.length === 0) {
        res.write("{'error': 'bad arguments'}");
        return res.sendStatus(400);
    }

    req.session.userid = username;
    res.redirect("/dinner/login/book");
});

router.get("/book", function(req, res) {
    debug(req.session);
    var s = req.session;
    if (s.userid) {
        return res.send("Tack " + s.userid + " din bokning är OK!");
    }

    res.sendStatus(403);
});

module.exports = router;