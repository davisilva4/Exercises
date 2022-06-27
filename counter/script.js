const newYear = 'Jan 01 2023';
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const totalSeconds = (newYearDate - currentDate)/1000;
    const days = Math.round(totalSeconds/(3600*24));
    const hours = Math.round((totalSeconds/3600)%24);
    const minutes = Math.round((totalSeconds/60)%60);
    const seconds = Math.round(totalSeconds%60);
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);

