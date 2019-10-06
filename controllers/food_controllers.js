// Import NPM dependency and Express router function.
var express = require("express");
var router = express.Router();
var request = require("request");

// Import data model.
var db = require("../models");

router.get("/index", function (req, res) {
  db.Food.findAll({}).then(function (data) {
    var hbsObject = {
      foods: data,
      style: "style.css"
    };

    res.render("index", hbsObject);
  });
});

router.get("/", function (req, res) {
  res.render("home", {
    style: "animation.css"
  });
});

// POST route which calls Sequelize's create method with the food name given.
router.post("/api/new/food", function (req, res) {
  var foodName = req.body.name;

  var queryUrl =
    "https://api.edamam.com/search?q=" +
    foodName +
    "&app_id=" + process.env.Ed_app_id + "&app_key=" + process.env.Ed_app_key;
  console.log("app_id " + process.env.Ed_app_id);
  console.log("app_key " + process.env.Ed_app_key)
  console.log(queryUrl)
  request(queryUrl, function (error, response, body) {
    if (!error && JSON.parse(body).response !== "False") {
      console.log(JSON.parse(body));

      if (error) res.redirect("/index");

      console.log(JSON.parse(body).q);
      if (!JSON.stringify(response)) {
        res.redirect("/index");
      } else {
        db.Food.create({
          food_name: JSON.parse(body).q,
          food_ing: JSON.parse(body).hits[0].recipe.ingredientLines[0],
          food_poster: JSON.parse(body).hits[0].recipe.image,
          food_time: JSON.parse(body).hits[0].recipe.totalTime,
          food_cal: JSON.parse(body).hits[0].recipe.calories,
          share_as: JSON.parse(body).hits[0].recipe.shareAs
        }).then(function () {
          res.redirect("/index");
        });
      }
    } else {
      console.log(
        "\nOops...something went wrong with you food search. Try again..."
      );
      res.redirect("/index");
    }
  });
});

// update method to mark that food as saved.
router.put("/api/new/saved/:id", function (req, res) {
  var saved = true;
  var ID = req.params.id;

  db.Food.update({
    saved: saved
  }, {
    where: {
      id: ID
    }
  }).then(function () {
    res.redirect("/index");
  });
});

// PUT (update) route which calls Sequelize's update method to mark the food as not yet saved .
// Sends the id to identify which food.
router.put("/:id", function (req, res) {
  var saved = false;
  var ID = req.params.id;

  db.Food.update({
    saved: saved
  }, {
    where: {
      id: ID
    }
  }).then(function () {
    res.redirect("/index");
  });
});

// Deleting a food recipe from result area

router.delete("/api/new/delete/:id", function (req, res) {
  var ID = req.params.id;

  db.Food.destroy({
    where: {
      id: ID
    }
  }).then(function () {
    res.redirect("/index");
  });
});

// Export routes for server.js.
module.exports = router;