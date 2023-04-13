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