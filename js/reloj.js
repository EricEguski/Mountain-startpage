startTime();

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";

    // Formato de 12 horas 
    // hr = (hr == 0) ? 12 : hr;
    // hr = (hr > 12) ? hr - 12 : hr;

    //Add a zero in front of numbers<10
    hr = comprobarTiempo(hr);
    min = comprobarTiempo(min);
    sec = comprobarTiempo(sec);

    // document.getElementById("reloj").innerHTML = hr + ":" + min + ":" + sec + " " ;
    document.getElementById("reloj").innerHTML = hr + ":" + min;
    
    var months = ['Enero', 'Febrero', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Domingo', 'Lunes', 'Tue', 'Wed', 'Thu', 'Fri', 'S'];

    var curWeekDay = days[today.getDay()];
    var diaHoy = today.getDate();
    var mesHoy = months[today.getMonth()];
    var anioHoy = today.getFullYear();

    var fecha = curWeekDay+", "+diaHoy+" "+mesHoy+" "+anioHoy;
    document.getElementById("fecha").innerHTML = fecha;
    
    // Para que la funcion se este ejecutando todo el rato
    var time = setTimeout(function(){ startTime() }, 500);
}

function comprobarTiempo(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}