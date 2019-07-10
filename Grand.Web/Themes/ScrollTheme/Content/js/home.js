function headerScroll() {
    if ($(window).width() > 991) {
        scroll_h = $(".main-slider-container").height() + 75;
        scroll_header = 115;
        $(window).scroll(function () {
            if ($(window).scrollTop() > scroll_h) {
                $('main').addClass('scrolled');
            }
            else {
                $('main').removeClass('scrolled');
            }
            if ($(window).scrollTop() > scroll_header) {
                $("header").addClass("black");
                TabsCheck();
            }
            else {
                $("header").removeClass("black");
            }
        });
    }
    else {
        scroll_h = $("#GrandSlider .swiper-slide:first").height();
        scroll_header = 60;
        $(window).scroll(function () {
            if ($(window).scrollTop() > scroll_h) {
                $('main').addClass('scrolled');
                console.log(scroll_h);
            }
            else {
                $('main').removeClass('scrolled');
            }
            if ($(window).scrollTop() > scroll_header) {
                $("header").addClass("black");
                $(".pagination-container").addClass('mobileScroll');
                TabsCheck();
            }
            else {
                $("header").removeClass("black");
                $(".pagination-container").removeClass('mobileScroll');
            }
        });
    }
}

function FeaturedNav() {
    $('.FeaturedCategory-navigation li a').each(function () {
        $(this).click(function () {
            var href = $(this).attr('data-href');
            if ($(window).width() < 992) {
                $('html, body').animate({
                    scrollTop: $(href).offset().top - 60
                }, 600);
            } else {
                $('html, body').animate({
                    scrollTop: $(href).offset().top - 70
                }, 600);
            }
            $('.FeaturedCategory-navigation li').removeClass('active');
            $(this).parent().addClass('active');
        });
    });
}

function ManuNav() {
    $('.FeaturedManufacturer-navigation li a').each(function () {
        $(this).click(function () {
            var href = $(this).attr('data-href');
            if ($(window).width() < 992) {
                $('html, body').animate({
                    scrollTop: $(href).offset().top - 75
                }, 600);
            } else {
                $('html, body').animate({
                    scrollTop: $(href).offset().top
                }, 600);
            }
            $('.FeaturedManufacturer-navigation li').removeClass('active');
            $(this).parent().addClass('active');
        });
    });
}

function TabsCheck() {
    $('#nav-HomeProductsContent .tab-pane').each(function () {
        var TabIndex = $(this).index();
        var ProductNavContent = $(this).find('div');
        if (ProductNavContent.length < 1) {
            $('.HomeProductsNav .nav-tabs a').eq(TabIndex).remove();
        }
    });
}

$(document).ready(function () {

    if ($('#GrandSlider .inside-caption').length > 0) {
        $('#GrandSlider .inside-caption').tilt({
            scale: 1.2
        });
    }

    TabsCheck();

    $(window).scroll(function () {
        if ($('.FeaturedManufacturer-navigation').length > 0) {

            var scroll_sections_manu = [];
            var manuOffsetContainer = $('.manufacturerGrid').offset().top + $('.manufacturerGrid').height();
            var manuNavpos = $('.FeaturedManufacturer-navigation').position().top + $('.FeaturedManufacturer-navigation ul li:first').height();

            $('.FeaturedManufacturer-navigation li a').each(function () {
                scroll_sections_manu.push($(this).attr('data-href'));
            });

            for (i in scroll_sections_manu) {
                if ($(scroll_sections_manu[i]).offset().top <= $(window).scrollTop() + manuNavpos) {
                    $('.FeaturedManufacturer-navigation li.active').removeClass('active');
                    $('.FeaturedManufacturer-navigation li a').eq(i).parent().addClass('active');
                }
            }

            if ($(window).scrollTop() > manuOffsetContainer) {
                $('.FeaturedManufacturer-navigation, .pagination-container.manu').addClass('hide');
            } else {
                $('.FeaturedManufacturer-navigation, .pagination-container.manu').removeClass('hide');
            }
        }

        if ($('.FeaturedCategory-navigation').length > 0) {

            var scroll_sections_cat = [];
            var catContainer = $('.featuredCatContainer').height() + 150;
            var catMobileContainer = $('.featuredCatContainer').height() - 200;
            var catNavpos = $('.FeaturedCategory-navigation').position().top + $('.FeaturedCategory-navigation ul li:first').height();

            $('.FeaturedCategory-navigation li a').each(function () {
                scroll_sections_cat.push($(this).attr('data-href'));
            });

            for (i in scroll_sections_cat) {
                if ($(scroll_sections_cat[i]).offset().top <= $(window).scrollTop() + catNavpos) {
                    $('.FeaturedCategory-navigation li.active').removeClass('active');
                    $('.FeaturedCategory-navigation li a').eq(i).parent().addClass('active');
                }
            }
            if ($(window).width() < 992) {
                if ($(window).scrollTop() > catMobileContainer) {
                    $('.FeaturedCategory-navigation, .pagination-container.cat').addClass('hide');
                } else {
                    $('.FeaturedCategory-navigation, .pagination-container.cat').removeClass('hide');
                }
            } else {
                if ($(window).scrollTop() > catContainer) {
                    $('.FeaturedCategory-navigation, .pagination-container.cat').addClass('hide');
                } else {
                    $('.FeaturedCategory-navigation, .pagination-container.cat').removeClass('hide');
                }
            }
        }       
    });

    headerScroll();

    FeaturedNav();
    ManuNav();

    $('.FeaturedProductSlider').each(function () {
        var sliderId = new Swiper($(this), {
            speed: 400,
            spaceBetween: 15,
            preloadImages: true,
            lazy: true,
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                575: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 15
                },
                1400: {
                    slidesPerView: 5,
                    spaceBetween: 15
                }
            },
            slidesPerView: 6,
            navigation: {
                nextEl: $(this).parent().parent().find('.custom-nav-button.next'),
                prevEl: $(this).parent().parent().find('.custom-nav-button.prev')
            },
            watchOverflow: true
        });
    });

    $('.FeaturedManuSlider').each(function () {
        var sliderId = new Swiper($(this), {
            speed: 400,
            spaceBetween: 15,
            preloadImages: true,
            lazy: true,
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                575: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 15
                },
                1400: {
                    slidesPerView: 5,
                    spaceBetween: 15
                }
            },
            slidesPerView: 6,
            navigation: {
                nextEl: $(this).parent().parent().find('.custom-nav-button.next'),
                prevEl: $(this).parent().parent().find('.custom-nav-button.prev')
            },
            watchOverflow: true
        });
    });

    var HomeCat = new Swiper('.HomeCat', {
        speed: 400,
        spaceBetween: 0,
        slidesPerView: 4,
        breakpoints: {
            767: {
                slidesPerView: 2
            },
            991: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            }
        }
    });

    var homeBlog = new Swiper('.swiper-container.home-blog', {
        speed: 400,
        spaceBetween: 30,
        preloadImages: true,
        lazy: true,
        navigation: {
            nextEl: '.blog-list-homepage .custom-nav-button.next',
            prevEl: '.blog-list-homepage .custom-nav-button.prev'
        },
        breakpoints: {
            575: {
                slidesPerView: 1
            },
            767: {
                slidesPerView: 2
            },
            1100: {
                slidesPerView: 2
            }
        },
        slidesPerView: 3
    });

    var homeNews = new Swiper('.swiper-container.home-news', {
        speed: 400,
        spaceBetween: 15,
        loop: true,
        preloadImages: true,
        lazy: true,
        navigation: {
            nextEl: '.news-list-homepage .custom-nav-button.next',
            prevEl: '.news-list-homepage .custom-nav-button.prev'
        },
        breakpoints: {
            575: {
                slidesPerView: 1
            },
            767: {
                slidesPerView: 2
            },
            991: {
                slidesPerView: 2
            }
        }
    });

    var Manuslider = new Swiper('.HomeManufacturers', {
        speed: 400,
        preloadImages: true,
        lazy: true,
        autoplay: {
            delay: 3000
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 30
            },
            1400: {
                slidesPerView: 6,
                spaceBetween: 45
            }
        },
        slidesPerView: 8,
        spaceBetween: 60,
        watchOverflow: true
    });
});