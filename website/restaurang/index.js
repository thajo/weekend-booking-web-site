/**
 *
 */

"use strict";

var express = require("express");
var router = express.Router();
var debug = require("debug")("restaurang");

router.get("/", function(req, res) {
    debug("Got connection to resaurang");
    res.send("Hello from restaurang");
});

module.exports = router;