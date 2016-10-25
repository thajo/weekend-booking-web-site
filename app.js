"use strict";
/**
 * Main application file
 */
var server;
var debug = require("debug")("start");
var express = require("express");

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || "development";
debug("Enviroment mode is: ", process.env.NODE_ENV);

var config = require("./config/environment");
var app = express();

var session = require("express-session");
var cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use(session({
    name:   "qi88ZyOC0BVAZDoD6yKSpSessionId",  // Don't use default session cookie name.
    secret: "K7smsx9MsE8MyCb1dwEzVp5EeCep5s",
    saveUninitialized: true,
    resave: true,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
}));

// read configuration and routes
require("./config/express")(app);
require("./websites/routes")(app);

server = app.listen(config.port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s, ENV: %s", host, port, app.get("env"));
});

// Expose app
//exports = module.exports = server;
