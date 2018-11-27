var colour1 = document.querySelectorAll(".colour-1");

// colour1.addEventListener("click", event => {
//   console.log(colour1);
// });

colour1.forEach(shape => addListener(shape));

function addListener(element) {
  element.addEventListener("click", event => {
    console.log(event.target.style.fill);
    event.target.style.fill = "#171717";
  });
}
