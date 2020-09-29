/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */
// get DOM elements
const decreaseBtn = document.getElementById('less');
const increaseBtn = document.getElementById('more');
const controlTime = document.getElementById('controlTime');
const timeCounter = document.getElementById('forCount');
const startBtn = document.getElementById('buttonPlay');
const pauseBtn = document.getElementById('buttonPause');
let defaultTime = 25;
let minutes = defaultTime;
let seconds = 0;
let play = false;
let pause = false;
let intervalTime;

//show real time or Time is up
function showRealTime(minutes, seconds) {
  if (minutes <= 0 && seconds == 0) {
    timeCounter.innerHTML = "Time's up!";
  } else {
    timeCounter.innerHTML = minutes + ':' + seconds.toString().padStart(2, '0');
  }
};
//time counter 
function updateTime() {
  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }
  if (minutes <= 0 && seconds <= 0) {
    clearInterval(intervalTime);
  }
  showRealTime(minutes, seconds);
}

decreaseBtn.addEventListener('click', function () {
  if (play == false) {
    defaultTime--;
    controlTime.innerHTML = defaultTime;
    minutes = defaultTime;
    showRealTime(minutes, seconds);
  }
});

increaseBtn.addEventListener('click', function () {
  if (play == false) {
    defaultTime++;
    controlTime.innerHTML = defaultTime;
    minutes = defaultTime;
    showRealTime(minutes, seconds);
  }
});

startBtn.addEventListener('click', function () {
  if (play == false) {
    startBtn.className = 'fa fa-stop';
    play = true;
    intervalTime = setInterval(updateTime, 1000);
  } else {
    startBtn.className = 'fa fa-play';
    play = false;
    pause = false;
    clearInterval(intervalTime);
    seconds = 0;
    minutes = defaultTime;
    showRealTime(minutes, seconds);
  }
});
pauseBtn.addEventListener('click', function () {
  if (play == true) {
    if (pause == false) {
      clearInterval(intervalTime);
      pause = true;
    } else {
      intervalTime = setInterval(updateTime, 1000);
      pause = false;
    }
  }
});

