
// Al entrar por defecto estará seleccionado el boton de opgg
if ($('#sb-form').attr("action") == "") {

    $('#opgg').css("transform", "translateY(0.2rem)");
    $('#opgg').css("border", "0.2px solid white");
    $('#opgg').css("color", "white");
    $('.buscarBarra').attr("placeholder", "Buscar en opgg")
    $('#sb-form').attr("action", "https://euw.op.gg/summoner/userName=");
}

$('#sb-form').submit(function () {
    // Al submitear lo que esta escrito en la barra se añade al link 
    $('#sb-form').attr("action", $('#sb-form').attr("action")+$('.buscarBarra').val());
});


$('#allkeyshop').click(function() {

    // Posiciones
    $(this).css("transform", "translateY(0.2rem)");
    $('#opgg').css("transform", "none");

    // Estilos
    $(this).css("border", "0.2px solid white");
    $(this).css("color", "white");

    // Resetear estilos del otro cuadrado
    $('#opgg').css("color", "rgba(0, 0, 0, 0)");
    $('#opgg').css("border", "none");

    // Cambiar el placeholder de la barra
    $('.buscarBarra').attr("placeholder", "Buscar en allkeyshop")
    $('#sb-form').attr("action", "https://www.allkeyshop.com/blog/catalogue/search-");

});

$('#opgg').click(function() {

    // Posiciones
    $(this).css("transform", "translateY(0.2rem)");
    $('#allkeyshop').css("transform", "none");

    // Estilos
    $(this).css("border", "0.2px solid white");
    $(this).css("color", "white");

    // Resetear estilos del otro cuadrado
    $('#allkeyshop').css("color", "rgba(0, 0, 0, 0)");
    $('#allkeyshop').css("border", "none");

    // Cambiar el placeholder de la barra
    $('.buscarBarra').attr("placeholder", "Buscar en opgg")
    $('#sb-form').attr("action", "https://euw.op.gg/summoner/userName=");

});