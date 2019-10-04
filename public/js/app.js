// Get references to page elements
var $FoodText = $("#Food-text");
var $FoodDescription = $("#Food-description");
var $submitBtn = $("#submit");
var $FoodList = $("#Food-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveFood: function(Food) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/Foods",
      data: JSON.stringify(Food)
    });
  },
  getFoods: function() {
    return $.ajax({
      url: "api/Foods",
      type: "GET"
    });
  },
  deleteFood: function(id) {
    return $.ajax({
      url: "api/Foods/" + id,
      type: "DELETE"
    });
  }
};

// refreshFoods gets new Foods from the db and repopulates the list
var refreshFoods = function() {
  API.getFoods().then(function(data) {
    var $Foods = data.map(function(Food) {
      var $a = $("<a>")
        .text(Food.text)
        .attr("href", "/Food/" + Food.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": Food.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $FoodList.empty();
    $FoodList.append($Foods);
  });
};

// handleFormSubmit is called whenever we submit a new Food
// Save the new Food to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var Food = {
    text: $FoodText.val().trim(),
    description: $FoodDescription.val().trim()
  };

  if (!(Food.text && Food.description)) {
    alert("You must enter an Food text and description!");
    return;
  }

  API.saveFood(Food).then(function() {
    refreshFoods();
  });

  $FoodText.val("");
  $FoodDescription.val("");
};

// handleDeleteBtnClick is called when an Food's delete button is clicked
// Remove the Food from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteFood(idToDelete).then(function() {
    refreshFoods();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$FoodList.on("click", ".delete", handleDeleteBtnClick);
