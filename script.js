const hourElement = document.querySelector(".hours");
const minuteElement = document.querySelector(".minutes");
const secondElement = document.querySelector(".seconds");
const btn = document.querySelectorAll("button");
let hours = 0;
let minutes = 0;
let seconds = 0;
let begin;
hourElement.innerHTML = "00";
minuteElement.innerHTML = "00";
secondElement.innerHTML = "00";

btn.forEach((ele) => {
  ele.addEventListener("click", () => {
    const eleText = ele.innerHTML;
    if (eleText == "Start") {
      start();
    } else if (eleText == "Stop") {
      stop();
    } else if (eleText == "Reset") {
      reset();
    }
  });
});

function startStopWatch() {
  seconds++;
  if (seconds == "60") {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    hours++;
    minutes = 0;
  }
  if (seconds < 10) {
    secondElement.innerHTML = "0" + seconds;
  } else {
    secondElement.innerHTML = seconds;
  }
  if (minutes < 10) {
    minuteElement.innerHTML = "0" + minutes;
  } else {
    minuteElement.innerHTML = minutes;
  }
  if (hours < 10) {
    hourElement.innerHTML = "0" + hours;
  } else {
    hourElement.innerHTML = hours;
  }
}

function start() {
  begin = setInterval(startStopWatch, 1000);
}

function stop() {
  clearInterval(begin);
}

function reset() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  hourElement.innerHTML = "00";
  minuteElement.innerHTML = "00";
  secondElement.innerHTML = "00";
  clearInterval(begin);
}
