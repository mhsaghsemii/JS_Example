// DEFINITION VARIABLES
// ADD EVENT LISTENER
// SELECT DIV.cute IN HTML WITH QUERYSELECTOR
const machine = document
  .querySelector(".cute")
  .addEventListener("keydown", change);

// DEFINITION FUNCTIONS
// FUNC FOR CHANGE DIV COLOR

function change(e) {
  // const key = e.keycode;

  // PRESS KEYBOARD
  // IF PRESS 1
  if (e.keycode === 49) {
    // => Bg COLOR = RED
    document.getElementsByClassName("cute").style.backgroundColor = "red";
  }

  // IF PRESS 2
  else if (e.keycode === 50) {
    // => Bg COLOR = green
    document.getElementsByClassName("cute").style.backgroundColor = "green";
  }

  // IF PRESS 3
  else if (e.keycode === 51) {
    // => Bg COLOR = blue
    document.getElementsByClassName("cute").style.backgroundColor = "blue";
  }
}


// ADD EVENT LISTENER
// IF DIV.cute HOVER :
machine.addEventListener("mouseover", hover);

function hover(e) {
    // => bg COLOR = BLACK
  document.getElementsByClassName("cute").style.backgroundColor = "black";
}
