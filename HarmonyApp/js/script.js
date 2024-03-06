const startBtnEl = document.querySelector(".start");
const animation2El = document.querySelector(".circle2");
const animation3El = document.querySelector(".circle3");
const animation4El = document.querySelector(".circle4");
const animation5El = document.querySelector(".circle5");
const animation6El = document.querySelector(".circle6");
const ctrlEl = (document.querySelector(".controls").firstChild.innerHTML =
  '"<button class="stop"><ion-icon class="stop-icon" name="stop-outline"></ion-icon></button>"');

startBtnEl.addEventListener("click", () => {
  animation2El.style.animationPlayState = "running";
  animation3El.style.animationPlayState = "running";
  animation4El.style.animationPlayState = "running";
  animation5El.style.animationPlayState = "running";
  animation6El.style.animationPlayState = "running";
});
