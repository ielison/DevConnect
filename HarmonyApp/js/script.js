const startBtnEl = document.querySelector(".start");
const pauseBtnEl = document.createElement("button");
pauseBtnEl.innerHTML =
  '<ion-icon class="pause-icon" name="pause-outline"></ion-icon>';
  const stopBtnEl = document.createElement("button");
pauseBtnEl.classList.add("pause");
stopBtnEl.innerHTML =
  '<ion-icon class="stop-icon" name="stop-outline"></ion-icon>';
stopBtnEl.classList.add("stop");

const controlEl = document.getElementById("controls");
const timeEl = document.querySelector(".time");
const musicEl = document.querySelector(".music");

const animationEls = document.querySelectorAll(".circle");

startBtnEl.addEventListener("click", start);
pauseBtnEl.addEventListener("click", pause);
stopBtnEl.addEventListener("click", stop);

function start() {
  animationEls.forEach(
    (animation) => (animation.style.animationPlayState = "running")
  );
  timeEl.remove();
  musicEl.remove();
  startBtnEl.remove();
  controlEl.appendChild(pauseBtnEl);
  controlEl.appendChild(stopBtnEl);
}

function pause() {
  controlEl.insertBefore(startBtnEl, controlEl.children[0]);
  animationEls.forEach(
    (animation) => (animation.style.animationPlayState = "paused")
  );
  pauseBtnEl.remove();
}

function stop() {
  animationEls.forEach((animation) => {
    animation.style.animation = "none";
    void animation.offsetWidth;
    animation.style.animation = null;
  });
  
  pauseBtnEl.remove();
  stopBtnEl.remove();
  controlEl.appendChild(startBtnEl);
  controlEl.appendChild(timeEl);
  controlEl.appendChild(musicEl);
}
