// Sacamos los datos de la fecha puesta por el usuario
function send(){
    const dayValue = document.getElementsByClassName('dayValue')[0].value;
    const monthValue = document.querySelector('select').value;
    const yearValue = document.getElementsByClassName('yearValue')[0].value;
    countdown(monthValue, dayValue, yearValue)
}

// Hacemos la cuenta regresiva
const countdown = (monthValue , dayValue, yearValue) => {
    // Si el usuario no agrega el año, el año sera el actual
    if (yearValue == '') yearValue = new Date().getFullYear()

    // Sacamos el tiempo con los datos obtenidos
    const countDate = new Date(`${monthValue} ${dayValue}, ${yearValue} 00:00:00`).getTime();
    
    // Calculamos el restante
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

    // Insertamos los valores en el HTML
    document.querySelector(".day").innerHTML = textDay;
    document.querySelector(".hour").innerHTML = textHour;
    document.querySelector(".minute").innerHTML = textMinute;
    document.querySelector(".second").innerHTML = textSecond;
};

// llamamos a la funcion cada 1000 milisegundos
setInterval(countdown && send, 1000);
