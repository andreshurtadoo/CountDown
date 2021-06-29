function send(){
    const dayValue = document.getElementsByClassName('dayValue')[0].value;
    const monthValue = document.querySelector('select').value;
    const span = document.querySelector('span');

    countdown(monthValue, dayValue)
}

const countdown = (monthValue , dayValue) => {
    const mes = monthValue;
    const dia = dayValue;

    const countDate = new Date(`${mes} ${dia}, 2021 00:00:00`).getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor( gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerHTML = textDay;
    document.querySelector(".hour").innerHTML = textHour;
    document.querySelector(".minute").innerHTML = textMinute;
    document.querySelector(".second").innerHTML = textSecond;

};

setInterval(countdown && send, 1000);
