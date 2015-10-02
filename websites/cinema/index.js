/**
 *
 */

"use strict";

var express = require("express");
var router = express.Router();
var debug = require("debug")("cinema");

router.get("/", function(req, res) {
    debug("Got connection");
    res.render("cinema/index", {title: "Welcome to cinema!"});
});
router.get("/check", function(req, res) {

    debug("Day: %s, Movie: %s", req.query.day, req.query.movie);

    res.send(checkAvability(req.query.day, req.query.movie) === 0 ? "Platser kvar" : "Fullbokat");
});

module.exports = router;

var data = [
    {day: "01", movie: "01", status: 0},
    {day: "01", movie: "02", status: 1},
    {day: "01", movie: "03", status: 0},
    {day: "01", movie: "04", status: 1},
    {day: "01", movie: "05", status: 1},
    {day: "01", movie: "06", status: 0},
    {day: "02", movie: "01", status: 1},
    {day: "02", movie: "02", status: 0},
    {day: "02", movie: "03", status: 1},
    {day: "02", movie: "04", status: 1},
    {day: "02", movie: "05", status: 1},
    {day: "02", movie: "06", status: 0},
    {day: "03", movie: "01", status: 0},
    {day: "03", movie: "03", status: 1},
    {day: "03", movie: "04", status: 1},
    {day: "03", movie: "05", status: 1},
];

function checkAvability(day, movie) {
    var fArr = data.filter(function(current) {
       return current.day === day && current.movie === movie;
    });
    return fArr[0].status;
}