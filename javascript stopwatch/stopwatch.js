const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const buttons = document.querySelectorAll('#button')

 
 let sec=0;
 let min =0;
 let ineterval ;

 function start() {
   ineterval = setInterval(timeRunning, 1000);
  // console.log('hello');
    return ineterval
};
function stop() {
  return clearInterval(ineterval);
};

function reset() {
  sec =0;
  min=0;
  seconds.innerHTML = 00;
  minutes.innerHTML = 00;
  clearInterval(ineterval)
  return
};

function timeRunning() {
  sec+=1;
  seconds.innerHTML =sec;
  if (sec==60) {
    sec =0;
    seconds.innerHTML =0;
    min+=1
    minutes.innerHTML =min;
  }
  return
}
 buttons.forEach(btn => { btn.addEventListener('click', (event)=>{
  if (btn.innerHTML==='start') {
    start();
  } else if (btn.innerHTML==='stop') {
    stop();
  } else if (btn.innerHTML==='reset') {
    reset();
  };
 })}
 );