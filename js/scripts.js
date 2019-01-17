$(document).ready(function() {
  $("#formOne").submit(function(event) {
  var animals = $("#animals").val();
  var turtles = $(".turtles");

  $(".animals").text(animals);
  $("#turtles").text(turtles);
  $("#results").show();

  event.preventDefault();
  });
});
