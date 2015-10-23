/**
 * Main application routes
 */
"use strict";

var express = require("express");
var debug = require("debug")("routes");

module.exports = function(app) {

    debug(__dirname + '/calendar/');

    // set routes for calendar - This is just static content
    app.use("/", express.static(__dirname + "/index/"));


    // set routes for calendar - This is just static content
    app.use("/calendar", express.static(__dirname + "/calendar/"));

    // set routes for calendar - This is just static content
    app.use("/dinner", express.static(__dirname + "/restaurang/static"));

    // set routes for cinema - the specifik routes for this is in /cinema
    app.use("/cinema", require("./cinema"));

    // set routes for calendar - This is just static content
    app.use("/cinema/static", express.static(__dirname + "/cinema/static/"));

    // set routes for restaurang
    app.use("/dinner/login", require("./restaurang"));

};