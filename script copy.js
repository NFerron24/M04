const btn = document.getElementById("mybutton");
btn.addEventListener("click", function () {
  alert("Button is clicked");
});

let btnBackground = document.getElementById("mySecondButton");
let bodyBackground = document.querySelector(".blue-background");

btnBackground.addEventListener("click", function () {
  bodyBackground.classList.toggle("red-background");
});
