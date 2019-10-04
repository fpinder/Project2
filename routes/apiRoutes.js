var db = require("../models");
var request = require("request");

module.exports = function(app) {
  // Get all examples
  app.get("/api/foods", function(req, res) {
    db.Food.findAll({}).then(function(dbFoods) {
      res.json(dbFoods);
    });
  });

  // Create a new example
  router.post("/api/new/food", function(req, res) {
    var foodName = req.body.name;
  
    var queryUrl =
      "https://api.edamam.com/search?q=" +
      foodName +
      "&app_id=02d84c5e&app_key=446d0c8b75c1140e1812840f84d5117d";
    request(queryUrl, function(error, response, body) {
      if (!error && JSON.parse(body).response !== "False") {
        console.log(JSON.parse(body));
  
        if (error) res.redirect("/");
  

        console.log(JSON.parse(body).q);
        if (!JSON.stringify(response)) {
          // res.send('SOMETHING WENT WRONG');
          res.redirect("/");
        } else {
          // videos = JSON.parse(result).results[0].key;
          // console.log(videos);
          db.Food.create({
            food_name: JSON.parse(body).q,
            food_ing: JSON.parse(body).hits[0].recipe.ingredientLines[0]
          }).then(function() {
            res.redirect("/");
          });
        }
      } else {
        console.log(
          "\nOops...something went wrong with you food search. Try again..."
        );
        res.redirect("/");
      }
    });
  });
  

  
  // Deleting a food
  
  router.delete("/api/new/delete/:id", function(req, res) {
    var ID = req.params.id;
  
    db.Food.destroy({
      where: { id: ID }
    }).then(function() {
      res.redirect("/");
    });
  });
  
