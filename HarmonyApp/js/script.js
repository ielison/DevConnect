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
const timeBtnEl = document.querySelector(".time");
const musicBtnEl = document.querySelector(".music");

const modalMusic = document.querySelector(".dialog-music");
const modalTime = document.querySelector(".dialog-time");

const saveSound = document.querySelector(".save-sound");

timeBtnEl.onclick = function () {
  modalTime.showModal();
};

saveSound.onclick = function () {
  modalTime.close();
};

musicBtnEl.onclick = function () {
  modalMusic.showModal();
};

saveSound.onclick = function () {
  modalMusic.close();
};

const animationEls = document.querySelectorAll(".circle");

startBtnEl.addEventListener("click", start);
pauseBtnEl.addEventListener("click", pause);
stopBtnEl.addEventListener("click", stop);
/* timeBtnEl.addEventListener("click", timer); */
/* musicBtnEl.addEventListener("click", sound); */

function start() {
  animationEls.forEach(
    (animation) => (animation.style.animationPlayState = "running")
  );
  timeBtnEl.remove();
  musicBtnEl.remove();
  startBtnEl.remove();
  controlEl.appendChild(pauseBtnEl);
  controlEl.appendChild(stopBtnEl);
  controlEl.classList.add("controls--second");
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
  controlEl.appendChild(timeBtnEl);
  controlEl.appendChild(musicBtnEl);
  controlEl.classList.remove("controls--second");
}
