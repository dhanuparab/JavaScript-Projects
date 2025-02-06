function startCountdown() {
    let time = document.getElementById('time').value;
    const display = document.getElementById('display');

    const interval = setInterval(() => {
        if (time > 0) {
            display.textContent = `Time left: ${time}s`;
            time--;
        } else {
            clearInterval(interval);
            display.textContent = "Time's up!";
        }
    }, 1000);
}
