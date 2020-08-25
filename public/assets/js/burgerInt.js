// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {


  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burgerName").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("Created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".devour-burger").on("click", function (event) {
    var id = $(this).data("id");
    // Send the PUT request to change burger to eaten
    $.ajax("/api/burgers/" + id, {
      type: "PUT"
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
