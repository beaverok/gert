$(document).ready(function () {
    $('.top-slider__slides').bxSlider({
        mode: 'fade',
        pager: false,
        nextText: '',
        prevText: ''
    });

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
});
