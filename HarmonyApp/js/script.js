const startBtnEl = document.querySelector(".start");
const pauseBtnEl = document.querySelector(".pause");
const pauseIconEl = document.querySelector(".pause-icon");
const animation2El = document.querySelector(".circle2");
const animation3El = document.querySelector(".circle3");
const animation4El = document.querySelector(".circle4");
const animation5El = document.querySelector(".circle5");
const animation6El = document.querySelector(".circle6");
const ctrlEl = document.querySelector(".start");
const timeEl = document.querySelector(".time");
const musicEl = document.querySelector(".music");

startBtnEl.addEventListener("click", () => {
  animation2El.style.animationPlayState = "running";
  animation3El.style.animationPlayState = "running";
  animation4El.style.animationPlayState = "running";
  animation5El.style.animationPlayState = "running";
  animation6El.style.animationPlayState = "running";
  timeEl.style.display = "none";
  musicEl.style.display = "none";
  startBtnEl.style.display = "none";
  pauseBtnEl.style.display = "block";
});

pauseBtnEl.addEventListener("click", () => {
  console.log("teste");
  animation2El.style.animationPlayState = "paused";
  animation3El.style.animationPlayState = "paused";
  animation4El.style.animationPlayState = "paused";
  animation5El.style.animationPlayState = "paused";
  animation6El.style.animationPlayState = "paused";
  startBtnEl.style.display = "block";
  pauseBtnEl.style.display = "none";
});
