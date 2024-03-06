const startBtnEl = document.querySelector(".start");
const pauseBtnEl = document.querySelector(".pause");
const stopBtnEl = document.querySelector(".stop");
const pauseIconEl = document.querySelector(".pause-icon");
const stopIconEl = document.querySelector(".stop-icon");
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
  pauseIconEl.style.height = "32px";
  pauseIconEl.style.widht = "32px";
  pauseIconEl.style.color = "#637173";
  pauseIconEl.style.cursor = "pointer";
  pauseIconEl.style.transition = "all 0.2s";
  stopBtnEl.style.display = "block";
  stopIconEl.style.height = "32px";
  stopIconEl.style.widht = "32px";
  stopIconEl.style.color = "#637173";
  stopIconEl.style.cursor = "pointer";
  stopIconEl.style.transition = "all 0.2s";
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

stopBtnEl.addEventListener("click", () => {
  console.log("teste");
  animation2El.style.animationPlayState = "initial";
  animation3El.style.animationPlayState = "initial";
  animation4El.style.animationPlayState = "initial";
  animation5El.style.animationPlayState = "initial";
  animation6El.style.animationPlayState = "initial";
  
});
