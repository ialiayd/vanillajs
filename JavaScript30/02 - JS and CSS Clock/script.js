document.addEventListener("DOMContentLoaded", function () {
  const secondHand = document.querySelector(".second-hand");
  const minsHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    let secondsDegrees = (seconds / 60) * 360 + 90; //başlangıç derecesi 90deg. doğru zamanda dönüyor olması için 90deg daha ekliyoruz
    let minutesDegrees = (minutes / 60) * 360 + 90; //başlangıç derecesi 90deg. doğru zamanda dönüyor olması için 90deg daha ekliyoruz
    let hoursDegrees = (hours / 12) * 360 + 90; //başlangıç derecesi 90deg. doğru zamanda dönüyor olması için 90deg daha ekliyoruz

    if (secondsDegrees === 59) secondsDegrees = 90;
    if (minutesDegrees === 59) minutesDegrees = 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minsHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }

  setInterval(setDate, 1000);
});
