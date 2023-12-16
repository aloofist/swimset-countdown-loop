const startingMinutes = 3;
let time = startingMinutes * 60;
let countdownFinished = false;
let countdownInterval;

const countdownEl = document.getElementById("countdown-el");
const pauseBtn = document.getElementById("pause-btn");

setInterval(displayCountdown, 1000);

function displayCountdown() { 
    const minutes = Math.floor(time / 60);
    let seconds = time % 60

    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    countdownEl.textContent = minutes + ":" + seconds;
    time--;

    if (time < 0) {
        countdownFinished  = true;
        time = startingMinutes * 60;
        setTimeout(function () {
            countdownFinished = false;
        }, 1000);
    }
}

function pauseTimer() {
    clearTimeout(countdownInterval);
}

function resumeTimer() {
    countdownInterval = setInterval(displayCountdown, 1000);
}

pauseBtn.addEventListener("click", function () {
    if (countdownInterval) {
        pauseTimer;
        pauseBtn.innerHTML =  '<i class="ri-play-line"></i>';
    } else {
        resumeTimer();
        pauseBtn.innerHTML = '<i class="ri-pause-circle-line"></i>';
    }
})
