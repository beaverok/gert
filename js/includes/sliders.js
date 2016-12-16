$(document).ready(function () {
    var w = $(window).width();

    $('.top-slider__slides').bxSlider({
        mode: 'fade',
        pager: false,
        nextText: '',
        prevText: ''
    });

    if (w > 1023) {
        $('.index-auctions__list').bxSlider({
            controls: true,
            pager: false,
            nextText: '',
            prevText: '',
            minSlides: 4,
            maxSlides: 4,
            slideWidth: 227,
            slideMargin: 95
        });

        $('.index-kurs__list').bxSlider({
            controls: true,
            pager: false,
            nextText: '',
            prevText: '',
            minSlides: 3,
            maxSlides: 3,
            slideWidth: 315,
            slideMargin: 125
        });

        $('.index-brands__list').bxSlider({
            controls: true,
            pager: false,
            nextText: '',
            prevText: '',
            minSlides: 5,
            maxSlides: 5,
            slideWidth: 134,
            slideMargin: 130
        });
    }

    if (w < 1024 && w > 640) {
        $('.index-auctions__list').bxSlider({
            controls: true,
            pager: false,
            nextText: '',
            prevText: '',
            minSlides: 2,
            maxSlides: 2,
            slideWidth: 227,
            slideMargin: 20
        });

        $('.index-kurs__list').bxSlider({
            controls: true,
            pager: false,
            nextText: '',
            prevText: '',
            minSlides: 2,
            maxSlides: 2,
            slideWidth: 315,
            slideMargin: 20
        });

        $('.index-brands__list').bxSlider({
            controls: true,
            pager: false,
            nextText: '',
            prevText: '',
            minSlides: 3,
            maxSlides: 3,
            slideWidth: 134,
            slideMargin: 60
        });
    }
    if (w < 640) {
        $('.index-auctions__list').bxSlider({
            controls: true,
            pager: false,
            nextText: '',
            prevText: '',
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 227
        });

        $('.index-kurs__list').bxSlider({
            controls: true,
            pager: false,
            nextText: '',
            prevText: '',
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 315
        });

        $('.index-brands__list').bxSlider({
            controls: true,
            pager: false,
            nextText: '',
            prevText: '',
            minSlides: 2,
            maxSlides: 2,
            slideWidth: 134,
            slideMargin: 30
        });
    }
});
