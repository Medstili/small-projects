const times =document.querySelector('.times')
const minutes =document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const hours =document.querySelector('.hours');
const buttons = document.querySelectorAll("button");
const startBtn = document.querySelector('.start')
const resumeBtn = document.querySelector('.resume')
const hoursdoubledot = document.querySelector('.hoursdoubledot');
let countSeconds =0;
let countMinutes =0;
let countHours =0;
let runTime;
let promptInput;
let runDown;
buttons.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        if (btn.innerHTML==='start') {
            runTime = setInterval(startTime, 1000);
        } else if(btn.innerHTML==='stop') {
            stopTime();
        } else if (btn.innerHTML==='reset') {
            resetTime();
        } else if (btn.innerHTML==='countdown') {
            clearInterval(runTime);
            promptInput = prompt('enter your time with the SYMBOL Ex: 1h or 1m or 1s ', "1h or 1m or 1s" );
            startBtn.style.display='none';
            resumeBtn.style.display='inline-block';
            runDown = setInterval(countdown, 1000);
        }
    })
})


function startTime() {
    if (hours.style.diplay ==='inline-block') {
        hours.style.display = 'none';
    };
    countSeconds++
    if (countSeconds<10) {
        seconds.innerHTML='0'+countSeconds; 
    } else {
        seconds.innerHTML =countSeconds;
    };
    if (countMinutes<10) {
        minutes.innerHTML = '0'+countMinutes;
    } else {
        minutes.innerHTML = countMinutes;
    };
    if (countHours<10) {
        hours.innerHTML = '0'+countHours;
    } else {
        hours.innerHTML = countHours;
    };
    if (countSeconds==60) {
        countSeconds =0;
        countMinutes++;
    };
    if (countMinutes==60) {
        countHours++;
        countMinutes=0;
    };
    if (countHours==1) {
        hours.style.display='inline-block';
        hoursdoubledot.style.display='inline-block';
    }
};

function stopTime() {
    clearInterval(runTime);
};

function resetTime() {
    countSeconds=0;
    countMinutes=0;
    countHours=0; 
    seconds.innerHTML='00';
    minutes.innerHTML='00';
    hours.innerHTML='00';
    hours.style.display='none';
    hoursdoubledot.style.display = 'none';
    startBtn.style.display='inline-block';
    resumeBtn.style.display='none';
    clearInterval(runTime);
    clearInterval(runDown);
};

function countdown(){
    let sec = 60;
    let min = 60;
    let promptValue = promptInput;
    let parseTheNum;
    switch (promptValue.charAt(promptValue.length-1)) {
        case 'h':   
            if (minutes.innerHTML!=='00') {
            minutes.innerHTML='00'
             } ;
            if (seconds.innerHTML!=='00') {
                seconds.innerHTML='00'
             };
            parseTheNum = parseInt(promptValue)-1;
            times.style.fontSize = '40px';
            hours.innerHTML = parseTheNum;
            minutes.innerHTML=min;
            seconds.innerHTML=sec   
            hoursdoubledot.style.display='inline-block';
            hours.style.display ='inline-block'; 
            sec--;
            if (sec===0) {
                min--
            };
            if(min===0){
                parseTheNum--
            };
            break;
        case 'm':
            if (seconds.innerHTML!=='00') {
                seconds.innerHTML='00';
            }
            hours.innerHTML='00';
            hours.style.display='none';
            parseTheNum = parseInt(promptValue)-1;
            minutes.innerHTML = parseTheNum;
            seconds.innerHTML=sec;
            hoursdoubledot.style.display='none'; 
            sec--;
            if (sec===0) {
                parseTheNum--;
            };
            break;
        case 's':
            hours.innerHTML='00';
            hours.style.display='none';
            hoursdoubledot.style.display='none';
            parseTheNum = parseInt(promptValue);
            seconds.innerHTML=parseTheNum;
            minutes.innerHTML='00';
            parseTheNum--;
            break;
        default:
            break;
        };
        
        return {sec, min, parseTheNum}
}
