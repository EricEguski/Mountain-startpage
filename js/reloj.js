startTime();

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";

    hr = comprobarTiempo(hr);
    min = comprobarTiempo(min);
    sec = comprobarTiempo(sec);

    // document.getElementById("reloj").innerHTML = hr + ":" + min + ":" + sec + " " ;
    // No me gusta con segundos, me agobia D:
    document.getElementById("reloj").innerHTML = hr + ":" + min;
    
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'June', 'Julio', 'Augosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

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