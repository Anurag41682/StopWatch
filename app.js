'use strict';
let startBtn = document.getElementById("startButton");
let stopBtn = document.getElementById("stopButton");
let resetBtn = document.getElementById("resetButton");
let returned, initializeCalled = false;
startBtn.addEventListener("click", () => {
    if (!initializeCalled) {
        initialize();
        initializeCalled = true;
    }
});
stopBtn.addEventListener("click", () => {
    clearInterval(returned);
    initializeCalled = false;
});
let counterMilsec = 0;
let counterSec = 0;
let counterMin = 0;
let counterHr = 0;
resetBtn.addEventListener("click", () => {
    clearInterval(returned);
    initializeCalled = false;
    counterMilsec = 0;
    counterSec = 0;
    counterMin = 0;
    counterHr = 0;
    document.getElementById("milsec").innerHTML = '00';
    document.getElementById("min").innerHTML = '00';
    document.getElementById("hr").innerHTML = '00';
    document.getElementById("sec").innerHTML = '00';
})

function occur() {
    counterMilsec++;
    if (counterMilsec == 100) {
        counterMilsec = 0;
        counterSec++;
    }
    if (counterSec == 60) {
        counterSec = 0;
        counterMin++;
    }
    if (counterMin == 60) {
        counterMin = 0;
        counterHr++;
    }
    document.getElementById("milsec").innerHTML = counterMilsec < 10 ? '0' +
        counterMilsec : counterMilsec;
    document.getElementById("sec").innerHTML = counterSec < 10 ? '0' +
        counterSec : counterSec;
    document.getElementById("min").innerHTML = counterMin < 10 ? '0' +
        counterMin : counterMin;
    document.getElementById("hr").innerHTML = counterHr < 10 ? '0' +
        counterHr : counterHr;
}

function initialize() {
    returned = setInterval(occur, 10);
}
