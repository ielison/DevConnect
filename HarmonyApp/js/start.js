

export default function start() {
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
