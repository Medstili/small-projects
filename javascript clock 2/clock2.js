const handyhour = document.querySelector('.hours')
const handyminutes = document.querySelector('.minutes')
const handyseconds = document.querySelector('.seconds')
 

setInterval(clockTime, 1000);

function clockTime() {

const currentDate = new Date();
const currentSecond = currentDate.getSeconds() / 60;
const currentMinute =  (currentSecond + currentDate.getMinutes()) / 60;
const currentHour = (currentMinute + currentDate.getHours()) / 12;
clockRotate(handyhour, currentHour)
clockRotate(handyminutes, currentMinute)
clockRotate(handyseconds, currentSecond)

};

function clockRotate(element, ratiorotate){
    element.style.setProperty('--rotation', ratiorotate * 360);
};

clockTime();