$(document).ready(function () {

    var subCategories = new Swiper('.sub-categories', {
        speed: 300,
        spaceBetween: 15,
        preloadImages: true,
        lazy: true,
        breakpoints: {
            440: {
                slidesPerView: 2
            },
            575: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            991: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 4
            },
            1400: {
                slidesPerView: 5
            }
        },
        slidesPerView: 6
    });

    var featuredProd = new Swiper('.featuredProd', {
        speed: 300,
        spaceBetween: 15,
        preloadImages: true,
        lazy: true,
        breakpoints: {
            440: {
                slidesPerView: 2
            },
            575: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            991: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 4
            },
            1400: {
                slidesPerView: 5
            }
        },
        navigation: {
            nextEl: '.featured-product-grid .custom-nav-button.next',
            prevEl: '.featured-product-grid .custom-nav-button.prev'
        },
        slidesPerView: 6
    });

    var realatedProd = new Swiper('.realatedProd', {
        speed: 300,
        spaceBetween: 15,
        preloadImages: true,
        lazy: true,
        breakpoints: {
            440: {
                slidesPerView: 2
            },
            575: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            991: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 4
            },
            1400: {
                slidesPerView: 5
            }
        },
        slidesPerView: 6
    });

    var alsopurchasedProd = new Swiper('.alsopurchasedProd', {
        speed: 300,
        spaceBetween: 15,
        preloadImages: true,
        lazy: true,
        breakpoints: {
            440: {
                slidesPerView: 2
            },
            575: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            991: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 4
            },
            1400: {
                slidesPerView: 5
            }
        },
        slidesPerView: 6
    });
    
});

function changeGrid(identifier) {
    function cookie() {
        $.cookie("colRemember", $(identifier).data('columns'));
        $.cookie("viewmodeSelected", $(identifier).index());
    }
    cookie();
}
function removeCookie(identifier) {
    $.removeCookie("colRemember");
    $.removeCookie("viewmodeSelected");
}


$(document).ready(function () {
    if ($(window).width() < 991) {
        $.removeCookie("colRemember");
        $.removeCookie("viewmodeSelected");
    } else {
        var cookieValue = $.cookie("colRemember");
        var cookieSelected = $.cookie("viewmodeSelected");
        if (cookieSelected > 0) {
            $('.product-list-container .product-container').removeAttr('class').addClass(cookieValue).addClass('mb-3 product-container');
            $('.viewmode-icon').each(function () {
                if ($(this).index() == cookieSelected) {
                    $(this).addClass('selected');
                }
            });
        }
    }
});