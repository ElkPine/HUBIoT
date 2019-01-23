"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// Create a new express application instance
var app = express();
var port = process.env.port || 3000;
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(port, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("Example app listening on port " + port + "!");
});
