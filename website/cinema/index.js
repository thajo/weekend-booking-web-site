/**
 *
 */

"use strict";

var express = require("express");
var router = express.Router();
var debug = require("debug")("cinema");

router.get("/", function(req, res) {
    debug("Got connection");
   res.send("Hello from cinema");
});

module.exports = router;