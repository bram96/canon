/**
 * middleware/index.js
 * All middleware are here to import all of them just with one command
 * in the main app.js
 *
 */
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var connectDB = require('./connectDB');


module.exports = function (server) {
  server.use(logger('dev'));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended: false}));
  server.use(cookieParser());
  server.use(session({
    secret: '1234567890QWERTYzxcvb',
    cookie: {
      expires: new Date(Date.now() + 3600000),
      maxAge: 3600000
    },
    saveUninitialized: true,
    resave: true
  }));
  server.use("/bower_components", express.static(__dirname + '/../../bower_components'));
  server.use("/scripts", express.static(__dirname + '/../scripts'));
  server.use("/styles", express.static(__dirname + '/../styles'));
  server.use("/views", express.static(__dirname + '/../views'));
  server.use("/images", express.static(__dirname + '/../images'));
  server.use(connectDB);
}
