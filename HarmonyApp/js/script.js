const startBtnEl = document.querySelector(".start");
const pauseBtnEl = document.createElement("button");
pauseBtnEl.innerHTML =
  '<ion-icon class="pause-icon" name="pause-outline"></ion-icon>';
const stopBtnEl = document.createElement("button");
pauseBtnEl.classList.add("pause");
stopBtnEl.innerHTML =
  '<ion-icon class="stop-icon" name="stop-outline"></ion-icon>';
stopBtnEl.classList.add("stop");

const logoEl = document.querySelector(".logo-footer")

const controlEl = document.getElementById("controls");
const timeBtnEl = document.querySelector(".time");
const musicBtnEl = document.querySelector(".music");

const modalMusic = document.querySelector(".dialog-music");
const modalTime = document.querySelector(".dialog-time");

const saveSound = document.querySelector(".save-sound");

var barEl = document.getElementById("myBar");
var durationInput = document.getElementById("duration");
var durationInSeconds = 120; // Obtem a duração inserida pelo usuário

const formAdicionarSom = document.querySelector('.form-add-sound')


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
  logoEl.style.opacity = "0";
  barMove();
}

function pause() {
  controlEl.insertBefore(startBtnEl, controlEl.children[0]);
  animationEls.forEach(
    (animation) => (animation.style.animationPlayState = "paused")
  );
  barEl.style.animationPlayState = "paused";
  pauseBtnEl.remove();
}

function stop() {
  animationEls.forEach((animation) => {
    animation.style.animation = "none";
    void animation.offsetWidth;
    animation.style.animation = null;

    logoEl.style.opacity = "1";
    
  });

  pauseBtnEl.remove();
  stopBtnEl.remove();
  controlEl.appendChild(startBtnEl);
  controlEl.appendChild(timeBtnEl);
  controlEl.appendChild(musicBtnEl);
  controlEl.classList.remove("controls--second");

  barEl.style.animation = "none";
  barEl.offsetHeight;
  barEl.style.animation = null;
}

function barMove() {
  barEl.style.animation = "none";
  barEl.offsetHeight;
  barEl.style.animation = null; 
  barEl.style.animationDuration = durationInSeconds + "s";

  
  barEl.style.animationPlayState = "running";
}
