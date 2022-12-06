let startSelector = document.getElementById("start");
let stopSelector = document.getElementById("stop");
let resetSelector = document.getElementById("reset");
let tSelector = document.querySelector("time");
let chrono = false;
let hour = 0;
let min = 0;
let sec = 0; 

function tick() {
    sec = parseInt(sec);
    min = parseInt(min);
    hour = parseInt(hour);

    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
    }
    if (min >= 60) {
        min = 0;
        hour++;
    }
    if (sec<10) {
        sec = `0${sec}`
    }
    if (min<10) {
        min = `0${min}`
        console.log(min)
    }
    if (hour<10) {
        hour = `0${hour}`
    }
    tSelector.textContent = `${hour} : ${min} : ${sec}`
}

startSelector.addEventListener("click", function start() {   
    if (!chrono) {
        timer = setInterval (function(){
            tick();                 
        },1000);
        chrono = true;
    }else {
        console.log(chrono);
    }
})

stopSelector.addEventListener("click", function stop() {
    chrono = false;
    clearInterval(timer);
})

resetSelector.addEventListener("click", function reset() {
    clearInterval(timer);
    chrono = false;
    hour = 0;
    min = 0;
    sec = 0
    tSelector.textContent = `00 : 00 : 00`
})