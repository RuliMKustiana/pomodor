let timer;
let hours = 0;
let minutes = 25;
let seconds = 0;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById('hours').innerText = padTime(hours);
    document.getElementById('minutes').innerText = padTime(minutes);
    document.getElementById('seconds').innerText = padTime(seconds);
}

function padTime(time) {
    return time < 10 ? '0' + time : time;
}

// Event listener for Start button
document.getElementById('startBtn').addEventListener('click', function() {
    startTimer();
});
