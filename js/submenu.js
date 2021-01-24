
       $('.divDinamico').hide();

$('.sub-search').click(function () {
    // $(".grid-container").animate({ right: "1000" }, { duration: 450 }, {complete: function() {
        $('.grid-container').fadeOut('fast', function () {
            $('.divDinamico').fadeIn();
        });

    //  });
});

$('.sub-home').click(function () {
    // $(".grid-container").animate({ right: "1000" }, { duration: 450 }, {complete: function() {
        $('.divDinamico').fadeOut('fast', function () {
            $('.grid-container').fadeIn();
        });

        // $('.grid-container').css("display", "grid");
    //  });
});


