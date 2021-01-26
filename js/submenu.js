
       $('.divDinamico').hide();
       $('.divAjustes').hide();


$('.sub-search').click(function () {

    if ($('.divAjustes').is(":visible")) {
        $('.divAjustes').fadeOut('fast', function () {
            $('.divDinamico').fadeIn();
        });
    }else if($('.grid-container').is(":visible")){
        $('.grid-container').fadeOut('fast', function () {
            $('.divDinamico').fadeIn();
        });
    }
    
});

$('.sub-home').click(function () {

    if ($('.divDinamico').is(":visible")) {
        $('.divDinamico').fadeOut('fast', function () {
            $('.grid-container').fadeIn();
        });
    }else if($('.divAjustes').is(":visible")){
        $('.divAjustes').fadeOut('fast', function () {
            $('.grid-container').fadeIn();
        });
    }

});

$('.sub-tool').click(function () {

    if ($('.divDinamico').is(":visible")) {
        $('.divDinamico').fadeOut('fast', function () {
            $('.divAjustes').fadeIn();
        });
    }else if($('.grid-container').is(":visible")){
        $('.grid-container').fadeOut('fast', function () {
            $('.divAjustes').fadeIn();
        });
    }
  
});


