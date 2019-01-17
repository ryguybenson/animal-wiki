$(document).ready(function() {
  $("#formOne").submit(function(event) {
  var animals = $("#animals").val();

  $(".animals").text(animals)

  $("#results").show();

  event.preventDefault();
  if (animals === turtle) {
    $(".turtles").show();
  }
  });
});
