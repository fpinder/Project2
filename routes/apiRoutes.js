var db = require("../models");

module.exports = function (app) {
  // Get all examples
<<<<<<< HEAD
  app.get("/api/examples", function (req, res) {
    db.Food.findAll({}).then(function (dbFoods) {
=======
  app.get("/api/foods", function(req, res) {
    db.Food.findAll({}).then(function(dbFoods) {
>>>>>>> TT
      res.json(dbFoods);
    });
  });

  // Create a new example
<<<<<<< HEAD
  app.post("/api/examples", function (req, res) {
    db.Food.create(req.body).then(function (dbFood) {
=======
  app.post("/api/foods", function(req, res) {
    db.Food.create(req.body).then(function(dbFood) {
>>>>>>> TT
      res.json(dbFood);
    });
  });

  // Delete an example by id
<<<<<<< HEAD
  app.delete("/api/examples/:id", function (req, res) {
    db.Food.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbFood) {
=======
  app.delete("/api/foods/:id", function(req, res) {
    db.Food.destroy({ where: { id: req.params.id } }).then(function(dbFood) {
>>>>>>> TT
      res.json(dbFood);
    });
  });
};