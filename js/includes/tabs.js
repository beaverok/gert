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