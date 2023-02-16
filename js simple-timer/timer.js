const times =document.querySelector('.times')
const minutes =document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const hours =document.querySelector('.hours');
const buttons = document.querySelectorAll("button");
const startBtn = document.querySelector('.start')
const resumeBtn = document.querySelector('.resume')
const hoursdoubledot = document.querySelector('.hoursdoubledot');

//  timer variabels //
let countSeconds =0;
let countMinutes =0;
let countHours =0;
let runTime;

// countdown timer variabels //
let promptInput;
let runDown;
let parseNum =0;
let min = 59;
let sec = 59;

// generating buttons role // 

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
            runDown = setInterval(countdown, 5);
        }else if (btn.innerHTML==='resume') {
            runDown=setInterval(countdown, 5);
        };
    })
})

// timer functions//

//  strating the time 
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

//  stoping the time
function stopTime() {
    clearInterval(runTime);
    clearInterval(runDown);
};
// reseting the whole time 
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

//countdown timer functions 

function countdown(){
    // checking if the input is an hour 
  if (promptInput.charAt(promptInput.length==='h')) {
    parseNum = parseInt(promptInput)-1;
    sec--;
    

    if (sec===0) {min--;sec=59;};
    if (min===0) { min=59;parseNum--;};
    
    seconds.innerHTML=sec.toString().padStart(2, '0');
    minutes.innerHTML=min.toString().padStart(2, '0');
    hours.innerHTML=parseNum.toString().padStart(2, '0');
    
    if (parseNum===0&min===0&sec===0) {clearInterval(runDown) ;};
    
    hours.style.display='inline-block';
    hoursdoubledot.style.display='inline-block';  
    return;

    // checking if the input is a minutes 

  } else if (promptInput.charAt(promptInput.length==='m')){
    parseNum = parseInt(promptInput)-1;
    sec--

    if (sec===0) {parseNum--};
    if (parseNum===0) {return clearInterval(runDown)};
    minutes.innerHTML = parseNum.toString().padStart(2,'0');
    seconds.innerHTML = sec.toString().padStart(2,'0');
    
    return;

    // checking if the input is a seconds 

  } else if (promptInput.charAt(promptInput.length==='s')) {
    parseNum = parseInt(promptInput);
    parseNum--
    seconds.innerHTML=parseNum.toString().padStart(2,'0');
    if (parseNum===0) {return clearInterval(runDown)};
    return ;
  };
  return;
};
/*
function _hour(a) {

     sec--;
     h=a;

     if (sec===0) {min--;sec=59;};
     if (min===0) { min=59;h--;};
     if (h===0&min===0&sec===0) {return clearInterval(runDown) ;};

     seconds.innerHTML=sec.toString().padStart(2, '0');
     minutes.innerHTML=min.toString().padStart(2, '0');
     hours.innerHTML=h.toString().padStart(2, '0');

     hours.style.display='inline-block';
     hoursdoubledot.style.display='inline-block';  
     return  ;
};
function _minute(b){
    sec--
    m=b;
    if (sec===0) {m--};
    if (m===0) {return clearInterval(runDown)};
    minutes.innerHTML = m.toString().padStart(2,'0');
    seconds.innerHTML = sec.toString().padStart(2,'0');
    return;
}

function _second(c) {
    s=c;
    s--
    seconds.innerHTML=s.toString().padStart(2,'0');
    if (s===0) {return clearInterval(runDown)};
    return ;
} */