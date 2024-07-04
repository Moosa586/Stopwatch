let timer; 
let isRunning = false; 
let seconds = 0, minutes = 0, hours = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById('startStopBtn').innerText = 'Start';
    isRunning = false;
  } else {
    timer = setInterval(updateDisplay, 1000);
    document.getElementById('startStopBtn').innerText = 'Stop';
    isRunning = true;
  }
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById('display').innerText = '00:00:00';
  document.getElementById('startStopBtn').innerText = 'Start';
}

function updateDisplay() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  
  let displayString = 
    (hours < 10 ? '0' + hours : hours) + ':' +
    (minutes < 10 ? '0' + minutes : minutes) + ':' +
    (seconds < 10 ? '0' + seconds : seconds);
  
  document.getElementById('display').innerText = displayString;
}
