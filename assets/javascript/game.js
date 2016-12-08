// Run Javascript when the HTML has finished loading
$(document).ready(function() {

  // Has the user selected their character
  var characterSelected = false;
  var character;

  // Determine which character the user has clicked
  $("#obi-wan-kenobi-character").on("click", function () {
    console.log("Obi-Wan Kenobi is clicked");

    if(characterSelected == false) {
      characterSelected = true;

      // Display the chosen character
      $("#obi-wan-kenobi-character").removeClass("available-character");
      $("#obi-wan-kenobi-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      $(".available-character").addClass("enemy-character");
      $(".available-character").removeClass("available-character");
      $("#enemies-available").append($(".enemy-character"));
    }
  });

  $("#luke-skywalker-character").on("click", function () {
    console.log("Luke Skywalker is clicked");
    console.log(this);

    if(characterSelected == false) {
      characterSelected = true;

      // Display the chosen character
      $("#luke-skywalker-character").removeClass("available-character");
      $("#luke-skywalker-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      $(".available-character").addClass("enemy-character");
      $(".available-character").removeClass("available-character");
      $("#enemies-available").append($(".enemy-character"));
    }
  });

  $("#darth-sidious-character").on("click", function () {
    console.log("Darth Sidious is clicked");
    console.log(this);

    if(characterSelected == false) {
      characterSelected = true;

      // Display the chosen character
      $("#darth-sidious-character").removeClass("available-character");
      $("#darth-sidious-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      $(".available-character").addClass("enemy-character");
      $(".available-character").removeClass("available-character");
      $("#enemies-available").append($(".enemy-character"));
    }
  });

  $("#darth-maul-character").on("click", function () {
    console.log("Darth Maul is clicked");
    console.log(this);

    if(characterSelected == false) {
      characterSelected = true;

      // Display the chosen character
      $("#darth-maul-character").removeClass("available-character");
      $("#darth-maul-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      $(".available-character").addClass("enemy-character");
      $(".available-character").removeClass("available-character");
      $("#enemies-available").append($(".enemy-character"));
    }
  });

}); // main routine
