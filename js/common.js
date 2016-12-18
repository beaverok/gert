$(document).ready(function () {
   // mobile menu open-close
    $('.main-menu__open-btn').click(function () {
        $('.main-menu').slideToggle();
    });
    /*$(document).click(function(event) {
        if ($(window).width() < 767 && $('.main-menu:visible')) {
            if ($(event.target).closest(".page-header").length) return;
            $('.main-menu').slideUp();
            event.stopPropagation();
        }
    });*/

    $('.top-menu__open-btn').click(function () {
        $('.top-menu').slideToggle();
    });


    var is_safari = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 &&  navigator.userAgent.indexOf('Android') == -1;
    if (is_safari) {
        $('body').addClass('safari');
    }

    $('.auction-item__counter').timeTo(1000);

    $('.price-filter__select').selectbox();

    $('.product__rev-lnk').click(function () {
        var selected = $(this).attr('href');
        $.scrollTo(selected, 1000, { offset: -70 });
    });
    $('.product__more').click(function () {
        var selected = $(this).attr('href');
        $.scrollTo(selected, 1000, { offset: -70 });
    });

    $('.fancy').fancybox();

    $('.product__foto-item a').click(function () {
       var pic = $(this).attr('data-src');

       $('.product__pic--big img').attr('src',pic);
        $('.product__pic--big a').attr('href',pic);
    });

});
