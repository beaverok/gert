$(".personal-tabs__lnk").click(function() {
    var parentBox = $(this).parents('.personal-tabs');

    $(parentBox).find("a").removeClass("personal-tabs__lnk--active");
    $(this).addClass("personal-tabs__lnk--active");
    $(".personal-tab").hide();

    var activeTab = $(this).attr("href");
    $(activeTab).fadeIn();
    $(activeTab).find("> ul:not(.personal-tabs__lnk--active)").addClass('personal-tabs__lnk--active');
    return false;
});

$(".brand-page__section-lnk").click(function() {
    var parentBox = $(this).parents('.brand-page__products');

    $(parentBox).find("a").removeClass("brand-page__section--current");
    $(this).addClass("brand-page__section--current");
    $(".brand-page__tab").hide();

    var activeTab = $(this).attr("href");
    $(activeTab).fadeIn();
    $(activeTab).find("> ul:not(.brand-page__section--current)").addClass('brand-page__section--current');
    return false;
});

$(".product-page__tabs-link").click(function() {
    var parentBox = $(this).parents('.product-page__tabs');

    $(parentBox).find("a").removeClass("product-page__tabs-link--active");
    $(this).addClass("product-page__tabs-link--active");
    $(".product-page__scopes-tab").hide();

    var activeTab = $(this).attr("href");
    $(activeTab).fadeIn();
    $(activeTab).find("> ul:not(.product-page__tabs-link--active)").addClass('product-page__tabs-link--active');
    return false;
});