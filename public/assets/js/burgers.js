// this burger.js file contains the ajax that calls all the onclick that triggers the actions

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    // Devour the burger
    $(".eatburger").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      console.log($(this).context.id);
      
      var id = $(this).context.id;
      
      // Add a conditional statement to troubleshoot this issue with THIS.
      if (id) {
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
        }
    });
  
    // Create new burger
    $(".add-burger").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: $("[name=devoured]").val().trim()
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
      var id = $(this).context.id;
  
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
  