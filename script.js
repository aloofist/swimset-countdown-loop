const startingMinutes = 2;
const startingSeconds = 10;
let time = startingMinutes * 60 + startingSeconds;
let countdownFinished = false;
let countdownInterval;

const countdownEl = document.getElementById("countdown-el");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn")

function displayCountdown() {
  if (!countdownFinished) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdownEl.textContent = minutes + ":" + seconds;
    time--;

    if (time < 0) {
      countdownFinished = true;
      time = startingMinutes * 60;
      setTimeout(function () {
        countdownFinished = false;
      }, 1000);
    }
  }
}

function startCountdown() {
  countdownInterval = setInterval(displayCountdown, 1000);
}

function pauseCountdown() {
  clearInterval(countdownInterval);
  countdownInterval = null;
}

startCountdown();

pauseBtn.addEventListener("click", function () {
  if (!countdownInterval) {
    pauseBtn.innerHTML = '<i class="ri-pause-circle-line"></i>';
    startCountdown();
  } else {
    pauseBtn.innerHTML = '<i class="ri-play-line"></i>';
    pauseCountdown();
  }
});

resetBtn.addEventListener("click", () => {
    time = startingMinutes * 60 + startingSeconds
    setTimeout(function () {
        countdownFinished = false;
        }, 1000);
    startCountdown();
})