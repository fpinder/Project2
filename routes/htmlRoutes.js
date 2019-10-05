var db = require("../models");
// var router = express.router();
var express = require("express");

module.exports = function (app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   db.Food.findAll({}).then(function(data) {
  //     var hbsObject = {
  //       foods: data
  //     };
  //     res.render("index", hbsObject);
  //   });
  // });

  // Load index page
  app.get("/", function (req, res) {
    // res.render("home");
    res.render("home");
  });

  app.get("/index", function (req, res) {
    // res.render("home");
    res.render("index");
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Food.findOne({ where: { id: req.params.id } }).then(function(dbFood) {
  //     res.render("food", {
  //       food: dbFood
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};