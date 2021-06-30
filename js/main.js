$(document).ready(function () {
    $(".search-area a").click(function () {
        $(".search-field").addClass("search-visible");
        $("body").addClass("overflow");
    });
});

$(document).ready(function () {
    $(".position-cross a").click(function () {
        $(".search-field").removeClass("search-visible");
        $("body").removeClass("overflow");
    });
});

$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass("change");
    });
});

$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".mobile-menu").toggleClass("menu-visible");
        $("body").toggleClass("overflow");
        $("main").toggleClass("main-hidden");
    });
});

$(document).ready(function () {
    $(".mobile-menu .dropdown-hover").click(function () {
        $(".mobile-drop").toggleClass("mobile-drop-visible");
    });
});
