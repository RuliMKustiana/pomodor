let timer;
let minutes = 25;
let seconds = 0;
let isTimerRunning = false;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
    isTimerRunning = true;
}

function pauseTimer() {
    clearInterval(timer);
    isTimerRunning = false;
}

function toggleTimer() {
    if (isTimerRunning) {
        pauseTimer();
        document.getElementById('startBtn').innerText = 'Resume';
    } else {
        startTimer();
        document.getElementById('startBtn').innerText = 'Pause';
    }
}

function updateTimer() {
    if (seconds === 0 && minutes === 0 && hours === 0) {
        stopTimer();
        alert('Time is up!');
        return;
    }

    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
    }

    document.getElementById('minutes').innerText = padTime(minutes);
    document.getElementById('seconds').innerText = padTime(seconds);
}

function padTime(time) {
    return time < 10 ? '0' + time : time;
}

document.getElementById('startBtn').addEventListener('click', function() {
    toggleTimer();
});