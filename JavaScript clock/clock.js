const clock = document.querySelector('.clock');


let session = ' AM';

 setInterval(TimeRunning, 1000);

function TimeRunning() {

    let dateTime = new Date();

let hour = dateTime.getHours();
let minute = dateTime.getMinutes();
let second = dateTime.getSeconds();

  if (hour>12) {
    hour=hour-12;
    session =' PM'
  };
  if (hour<10) {
    hour='0'+hour;
  };
  if(minute<10){
    minute = '0'+minute;
  };
  if (second<10) {
    second= '0'+second;
};

clock.innerText = hour+':'+minute+':'+second+session;

return clock;

}
