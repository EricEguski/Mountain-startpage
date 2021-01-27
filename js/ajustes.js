

// Cuando escribes en el input se guarda en localstorage y se usa en la función saludar
$('#txt-nombre').on("input", function () 
{
    if ($('#txt-nombre').val()=="") {
        localStorage.setItem("nombre", "none");
        saludar("🪐");

    }else if ($('#txt-nombre').val()!=""){
        localStorage.setItem("nombre", $('#txt-nombre').val());
        saludar(localStorage.getItem("nombre"));
    }

})

// Cuando escribes en el input se guarda en localstorage y se usa como fondo
$('#url-fondo').on("blur", function () 
{
    if ($('#url-fondo').val()!="") {
        localStorage.setItem("fondo", $('#url-fondo').val());
        console.log($('#url-fondo').val());
       
        cambiarFondo();
         
    }else if ($('#url-fondo').val()=="") {
        localStorage.setItem("fondo", "none");

        cambiarFondo();
    }
    
})


// Si existe el localstorage lo ponemos en el input y lo usamos
if (localStorage.getItem("nombre")==null || localStorage.getItem("nombre")=="none") {
    saludar("🪐");

}else 
{
    $('#txt-nombre').val(localStorage.getItem("nombre"));
    saludar(localStorage.getItem("nombre"));
    
}

// Si exite el localstorage lo ponemos en el input y lo usamos
function cambiarFondo() 
{    
    if (localStorage.getItem("fondo")==null || localStorage.getItem("fondo")=="none") 
    {
        localStorage.setItem("fondo", "https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Berchtesgaden_Desktop_1920x1080.jpg");
        $('body').css("background-image", "url("+localStorage.getItem("fondo")+")");

    }else
    {
        
        $('#url-fondo').val(localStorage.getItem("fondo"));
        $('body').css("background-image", "url("+localStorage.getItem("fondo")+")");
    }
}