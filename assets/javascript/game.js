// ----- Global Variables ----- //

// Variable that stores the initial state of all the characters
var availableCharacters;

// Has the user selected their character
var characterSelected = false;

// Has the user selected the defender
var defenderSelected = false;

// Number of enemies defeated
var enemiesDefeated = 0;

// ----- Character Objects ----- //

var obiWanKenobi = {};
var lukeSkywalker = {};
var darthSidious = {};
var darthMaul = {};

// ----- Helper Functions ----- //

// This function will move the remaining characters to the enemies section
function moveToEnemies() {
  $(".available-character").removeClass("available-character").addClass("enemy-character");
  $("#enemies-available").append($(".enemy-character"));
}

// This function will reset the state of the game
function resetGame() {
  $(".character-image").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
  $("#characters-available").html(availableCharacters);

  characterSelected = false;
  defenderSelected = false;
}

// ----- Main Routine ----- //

// Run Javascript when the HTML has finished loading
$(document).ready(function() {

  // Variables to store the user's chosen character and defender
  var user;
  var defender;

  // Obtain the initial state of the available characters
  availableCharacters = $(".available-character");

  // Determine which character the user has clicked
  $("#obi-wan-kenobi-character").on("click", function () {
    console.log("Obi-Wan Kenobi is selected");

    // User is choosing the character
    if(characterSelected == false) {
      characterSelected = true;

      // Display the chosen character
      $("#obi-wan-kenobi-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#obi-wan-kenobi-character").hasClass("enemy-character")) {
        // Add the character to the defender section
        defenderSelected = true;
        $("#obi-wan-kenobi-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#luke-skywalker-character").on("click", function () {
    console.log("Luke Skywalker is selected");

    // User is choosing the character
    if(characterSelected == false) {
      characterSelected = true;

      // Display the chosen character
      $("#luke-skywalker-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#luke-skywalker-character").hasClass("enemy-character")) {
        // Add the character to the defender section 
         defenderSelected = true;
        $("#luke-skywalker-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#darth-sidious-character").on("click", function () {
    console.log("Darth Sidious is selected");

    // User is choosing the character
    if(characterSelected == false) {
      characterSelected = true;

      // Display the chosen character
      $("#darth-sidious-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#darth-sidious-character").hasClass("enemy-character")) {
        // Add the character to the defender section 
         defenderSelected = true;
        $("#darth-sidious-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#darth-maul-character").on("click", function () {
    console.log("Darth Maul is selected");

    // User is choosing the character
    if(characterSelected == false) {
      characterSelected = true;

      // Display the chosen character
      $("#darth-maul-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#darth-maul-character").hasClass("enemy-character")) {
        // Add the character to the defender section 
         defenderSelected = true;
        $("#darth-maul-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#attack").on("click", function() {
    console.log("Attack selected");
  });

  $("#restart").on("click", function() {
    console.log("Restart selected");

    resetGame();
  });

}); // Main routine
