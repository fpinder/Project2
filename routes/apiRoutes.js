var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Food.findAll({}).then(function(dbFoods) {
      res.json(dbFoods);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Food.create(req.body).then(function(dbFood) {
      res.json(dbFood);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Food.destroy({ where: { id: req.params.id } }).then(function(dbFood) {
      res.json(dbFood);
    });
  });
};
