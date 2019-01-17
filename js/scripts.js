$(document).ready(function() {
  $("#formOne").submit(function(event) {
  var animals = $("#animals").val();
  console.log(typeof animals);
  $(".animals").text(animals);

  $("#results").show();

  event.preventDefault();
  if (animals === "turtle") {
    $(".turtles").show();
  } if (animals === "snake"){
    $(".snakes").show();
  } if (animals === "insect") {
    $(".insects").show();
  }
  });
});
