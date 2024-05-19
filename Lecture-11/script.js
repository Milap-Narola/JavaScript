const Clock = () => {

    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let am_or_pm = document.getElementById("am-or-pm");

    if (hours >= 12) {
        am_or_pm.innerHTML = "pm";
    }
    else {
        am_or_pm.innerHTML = "am";
    }

    if (hours > 12) {
        hours = hours - 12;
    }
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}


setInterval(Clock, 1000);
