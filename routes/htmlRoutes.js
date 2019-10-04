var db = require("../models");
// var router = express.Router();
var express = require("express");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Food.findAll({}).then(function(data) {
      var hbsObject = {
        foods: data
      };
      res.render("index", hbsObject);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
