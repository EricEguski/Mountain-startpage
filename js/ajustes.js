// Si existe el localstorage lo ponemos en el input y lo usamos
if (localStorage.getItem("nombre")!=null) {
    $('#txt-nombre').val(localStorage.getItem("nombre"));
    saludar(localStorage.getItem("nombre"));
}else{
    saludar("bro");
}

// Si exite el localstorage lo ponemos en el input y lo usamos
if (localStorage.getItem("fondo")!=null) {
    $('#url-fondo').val(localStorage.getItem("fondo"));
    $('body').css("background-image", "url("+localStorage.getItem("fondo")+")");
}

// Cuando escribes en el input se guarda en localstorage y se usa en la función saludar
$('#txt-nombre').on("input", function () {
    localStorage.setItem("nombre", $('#txt-nombre').val());
    saludar(localStorage.getItem("nombre"));
})

// Cuando escribes en el input se guarda en localstorage y se usa como fondo
$('#url-fondo').on("blur", function () {
    localStorage.setItem("fondo", $('#url-fondo').val());
    $('body').css("background-image", "url("+localStorage.getItem("fondo")+")");
})
