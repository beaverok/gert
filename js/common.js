$(document).ready(function () {
   // mobile menu open-close
    $('.page-header__menu-btn').click(function () {
        $('.main-menu').slideToggle();
    });
    $(document).click(function(event) {
        if ($(window).width() < 767 && $('.main-menu:visible')) {
            if ($(event.target).closest(".page-header").length) return;
            $('.main-menu').slideUp();
            event.stopPropagation();
        }
    });


    var is_safari = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 &&  navigator.userAgent.indexOf('Android') == -1;
    if (is_safari) {
        $('body').addClass('safari');
    }

    $('.auction-item__counter').timeTo(1000);
});
