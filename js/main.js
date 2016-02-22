var redButton = document.querySelector( ".one");

redButton.addEventListener("click", changeRed);

function changeRed(){
  document.body.style.backgroundColor = "red";
}
//this is how I started. Format the rest for clean up like this: //

var whiteButton = document.querySelector(".two");
var blueButton = document.querySelector("#blueButton");
var yellowButton = document.querySelector(".four");

whiteButton.addEventListener("click", changeWhite);
blueButton.addEventListener("click", changeBlue);
yellowButton.addEventListener("click", changeYellow);

function changeWhite(){
  document.body.style.backgroundColor = "white";
}
function changeBlue(){
  document.body.style.backgroundColor = "blue";
}
function changeYellow(){
  document.body.style.backgroundColor = "yellow";
}
