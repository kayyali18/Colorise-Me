// var colour1 = document.querySelectorAll(".colour-1");
// var colour2 = document.querySelectorAll(".colour-2");
// var colour3 = document.querySelector(".colour-3");
// var colour4 = document.querySelector(".colour-4");
// var colour5 = document.querySelector(".colour-5");

// // colour1.addEventListener("click", event => {
// //   console.log(colour1);
// // });

// colour1.forEach(shape => addListener(shape));

// function addListener(element) {
//   element.addEventListener("click", event => {
//     console.log(event.target.style.fill);
//     event.target.style.fill = "#171717";
//   });
// }

$(document).ready(function() {
  class ColouredBox {
    constructor() {
      this.colour = this.randomColour();
    }

    randomColour() {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
  }

  function genColours() {
    for (let i = 0; i < colours.length; i++) {
      let hex = new ColouredBox().colour;
      colours[i].style.fill = hex;
      colours[i].id = hex;
    }
  }

  var projectSelect = $("project-select")
    .find(":selected")
    .text();
  var randomBtn = $(".randomise");

  var colours = $(".colour").toArray();
  genColours();
  randomBtn.on("click", function() {
    genColours();
  });
  $("form").on("submit", function(event) {
    event.preventDefault();
    projectSelect = $("select option:selected").val();
  });
  //select all colours
  $(".colour-2").on("click", event => {
    $(".colour-2")
      .addClass("animated pulse")
      .delay(2000);

    setTimeout(function() {
      $(".colour-2").removeClass("animated pulse");
    }, 1000);
  });

  //create button for random

  //create form for search

  //when clicked on random
  //each color's fill is the return value from the return randomcolour func

  //randomColoour
  //array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F]
  //while x < 6
  //  pick random character
  // increment x
  //concat to new string

  //return string
});
