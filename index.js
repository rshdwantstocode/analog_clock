const Hours = document.querySelector(".hour_time");
const Minutes = document.querySelector(".minute_time");
const Seconds = document.querySelector(".second_time");



function updateTime(){
    const date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    let hours_rotate = (hours % 12) * 30 + (minutes / 60) * 30;
    let mins_rotate = minutes * 6;
    let sec_rotate = seconds * 6;

    Hours.style.transform = `rotate(${hours_rotate}deg)`;
    Minutes.style.transform = `rotate(${mins_rotate}deg)`;
    Seconds.style.transform = `rotate(${sec_rotate}deg)`;
};

setInterval(updateTime, 1000);

updateTime();