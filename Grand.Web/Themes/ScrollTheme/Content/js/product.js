function GalleryNav() {
    $('.product-standard .gallery-navigation li:first').addClass('active');
    $('.product-standard .gallery-navigation li a').each(function () {
        $(this).click(function () {
            var href = $(this).attr('data-href');
            $('html, body').animate({
                scrollTop: $(href).offset().top - 245
            }, 600);
            $('.product-standard .gallery-navigation li').removeClass('active');
            $(this).parent().addClass('active');
        });
    });
}
$(document).ready(function () {

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    GalleryNav();

    $(window).scroll(function () {

        var scroll_sections = [];

        $('.product-standard .gallery-navigation li a').each(function () {
            scroll_sections.push($(this).attr('data-href'));
        });

        for (i in scroll_sections) {
            if ($(scroll_sections[i]).position().top <= $(window).scrollTop() + 130) {
                $('.product-standard .gallery-navigation li.active').removeClass('active');
                $('.product-standard .gallery-navigation li a').eq(i).parent().addClass('active');
            }
        }

    });

    var scrolled = false;
    var prodH = $('.product-details-page').innerHeight();
    console.log(prodH);
    var prodShare = $('.product-details-page .product-share');
    var prodPag = $('.product-details-page .gallery .gallery-navigation-container');

    $(window).scroll(function () {
        //if I scroll more than 1000px...
        if ($(window).scrollTop() > prodH && scrolled == false) {
            prodShare.addClass('hide');
            prodPag.addClass('hide');
            scrolled = true;
        } else if ($(window).scrollTop() < prodH && scrolled == true) {
            prodShare.removeClass('hide');
            prodPag.removeClass('hide');
            scrolled = false;
        }
    });

});