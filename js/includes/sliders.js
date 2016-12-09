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
});
