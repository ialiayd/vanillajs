const playSound = function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  if (!key) return;
  audio.currentTime = 0; //rewind to start
  audio.play();
  key.classList.add("playing");
};

const removeTransition = function (e) {
  //   e.target.classList.remove("playing");
  if (e.propertyName !== "transform") return; //skip if the current transition is not transform
  e.target.classList.remove("playing");
};
document.addEventListener("DOMContentLoaded", () => {
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );
  window.addEventListener("keydown", playSound);
});
