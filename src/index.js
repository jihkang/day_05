import "./styles.css";

// You're gonna need this

const christmas = document.querySelector("div"),
  resultTime = christmas.querySelector("h2");

function setTime(result) {
  resultTime.innerText = result;
}

function floorTime(time) {
  return Math.floor(time);
}

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");

  var curDate = new Date(),
    remainDay = xmasDay - curDate;

  var day, hour, minute, second;
  var result;

  day = floorTime(remainDay / (1000 * 60 * 60 * 24));
  hour = floorTime((remainDay / (1000 * 60 * 60)) % 24);
  minute = floorTime((remainDay / (1000 * 60)) % 60);
  second = floorTime((remainDay / 1000) % 60);

  result = day + "d" + hour + "h" + minute + "m" + second + "s";
  setTime(result);
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
