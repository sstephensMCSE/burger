// this burger.js file contains the ajax that calls all the onclick that triggers the actions

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    // Devour the burger
    $(".eatburger").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      var id = $(this).data("id");
      var newDevouredState = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevouredState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // Create new burger
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#newburger").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // Delete the burger
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  