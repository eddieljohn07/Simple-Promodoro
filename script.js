let intervalId;
let minutes = 25;
let seconds = 0;
let isPomodoro = true;
let isRunning = false;

const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

const startTimer = () => {
if (!isRunning) {
    isRunning = true;
    intervalId = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
            clearInterval(intervalId);
            isRunning = false;
            if (isPomodoro) {
                alert('The 25 minutes of work is finished! Go ahead and take a break!\n You deserve it!');
                minutes = 5;
                isPomodoro = false;
            } else {
                alert('Your short break is finished! Time to grind again!');
                minutes = 25;
                isPomodoro = true;
            }
            seconds = 0;
            updateDisplay();
            } else {
            minutes--;
            seconds = 59;
            }
        } else {
            seconds--;
        }
        updateDisplay();
        }, 1000);
    }
}
