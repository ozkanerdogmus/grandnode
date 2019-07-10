/*
** custom js functions
*/
$(document).ready(function () {
    $('body').addClass('is-ready');

    if ($(window).width() > 991) {
        var mainMenu = new Swiper('.main-menu', {
            slideClass: 'nav-item',
            slideActiveClass: 'nav-item-active',
            slideDuplicateActiveClass: 'nav-item-duplicate-active',
            slideVisibleClass: 'nav-item-visible',
            slideDuplicateClass: 'nav-item-duplicate',
            slideNextClass: 'nav-item-next',
            slideDuplicateNextClass: 'nav-item-duplicate-next',
            slidePrevClass: 'nav-item-prev',
            slideDuplicatePrevClass: 'nav-item-duplicate-prev',
            wrapperClass: 'main-menu-wrapper',
            freeMode: true,
            slidesPerView: 'auto',
            navigation: {
                nextEl: '.main-menu-next',
                prevEl: '.main-menu-prev'
            }
        });
    }

    $(document).on('touchstart', function (event) {
        if (!$(event.target).closest('.mega-menu .dropdown-menu.show').length) {
            $('.mega-menu .dropdown-menu.show').removeClass('show');
            if ($(".home-nav ul .top-category > .dropdown-toggle").hasClass('opened')) { 
                setTimeout(function () { $(".home-nav ul .top-category > .dropdown-toggle").removeClass('opened'); }, 300);
            }
        }
        if (!$(event.target).closest('.simple-menu .dropdown-menu.show').length) {
            $('.simple-menu .dropdown-menu.show').removeClass('show');
        }
    });
});

$(function () {
    $('[data-tooltip="tooltip"]').tooltip();
});

$(function () {
    $(document).bind("beforecreate.offcanvas", function (e) {
        var dataOffcanvas = $(e.target).data('offcanvas-component');
    });
    $(document).bind("create.offcanvas", function (e) {
        var dataOffcanvas = $(e.target).data('offcanvas-component');
        //console.log(dataOffcanvas);
        dataOffcanvas.onOpen = function () {
            //console.log('Callback onOpen');
        };
        dataOffcanvas.onClose = function () {
            //console.log('Callback onClose');
        };

    });
    $(document).bind("clicked.offcanvas-trigger clicked.offcanvas", function (e) {
        var dataBtnText = $(e.target).text();
        //console.log(e.type + '.' + e.namespace + ': ' + dataBtnText);
    });
    $(document).bind("open.offcanvas", function (e) {
        var dataOffcanvasID = $(e.target).attr('id');
        //console.log(e.type + ': #' + dataOffcanvasID);
    });
    $(document).bind("resizing.offcanvas", function (e) {
        var dataOffcanvasID = $(e.target).attr('id');
        //console.log(e.type + ': #' + dataOffcanvasID);
    });
    $(document).bind("close.offcanvas", function (e) {
        var dataOffcanvasID = $(e.target).attr('id');
        //console.log(e.type + ': #' + dataOffcanvasID);
    });
    $(document).trigger("enhance");
});


function mainMenuReplace() {
    if ($(window).width() < 991) {
        var Menu = $('.home-nav .menu'),
            HeaderLinks = $('.hl-container'),
            Dropdowns = $('.hl-container .dropdowns-container'),
            Manufacturers = $('.home-nav .manufacturer-dropdown'),
            Links = $('.home-nav .solo-link-item');

        Menu.prependTo('#pills-menu');
        Dropdowns.insertAfter('#pills-mobile-tabContent');
        if ($('.mobile-menu .manufacturer-dropdown').length) {
            Manufacturers.prependTo('#pills-manufacturers');
        }
        else {
            $('#pills-manufacturers-tab').parent().hide();
        }
        if ($('.mobile-menu .solo-link-item').length) {
            Links.prependTo('#pills-links .links-dropdown');
        }
        else {
            $('#pills-links-tab').parent().hide();
        }

        $("#pills-mobile-tabContent .nav-item .dropdown-toggle").each(function () {
            $(this).removeAttr('href');
        });

        $('#pills-mobile-tabContent .menu .nav-item.dropdown > .dropdown-toggle').click(function () {
            var CatForOpen = $(this).parent().find('.dropdown-menu:first');
            CatForOpen.addClass('show');
        });
        $('#pills-mobile-tabContent .menu .cat-back').click(function () {
            $(this).parent().removeClass('show');
        });

    }
    else {
        var Menu = $('.mobile-menu #pills-menu .menu'),
            HeaderLinks = $('.hl-container'),
            Dropdowns = $('.mobile-menu .dropdowns-container'),
            Manufacturers = $('.mobile-menu .manufacturer-dropdown'),
            Links = $('.mobile-menu .links-dropdown .solo-link-item');

        Menu.insertAfter('.logo');
        Dropdowns.insertAfter('.header-links .menu-open-button');
        Manufacturers.insertAfter('.home-nav .menu .manufacturer-items .dropdown-toggle');
        $(Links.get().reverse()).each(function () {
            $(this).insertAfter('.blank-link');
        });
    }
}
function BackToTop() {
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
        });
    }
}
function IpadMenuFix() {
    if (navigator.platform == "iPad") {
        $('.home-nav .menu li.dropdown > .dropdown-toggle').click(function () {
            if ($(this).parent().hasClass("show")) {
                window.location = $(this).attr('href');
            }
        });
    }
    else {
        $('.home-nav .menu li.dropdown > .dropdown-toggle').click(function () {
            window.location = $(this).attr('href');
        });
    }
}

function dataCountdown() {
    $('.countdown.all').each(function () {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            if (event.strftime('%D') > 0) {
                $this.html(event.strftime('%D days %H:%M:%S'));
            }
            else {
                $this.html(event.strftime('%H:%M:%S'));
            }
        });
    });
    $('.countdown.days').each(function () {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            if (event.strftime('%D') > 0) {
                $this.html(event.strftime('%D'));
            }
            else {
                $this.html(event.strftime('0'));
            }
        });
    });
    $('.countdown.hours').each(function () {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            if (event.strftime('%H') > 0) {
                $this.html(event.strftime('%H'));
            }
            else {
                $this.html(event.strftime('00'));
            }
        });
    });
    $('.countdown.minutes').each(function () {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            if (event.strftime('%M') > 0) {
                $this.html(event.strftime('%M'));
            }
            else {
                $this.html(event.strftime('00'));
            }
        });
    });
    $('.countdown.seconds').each(function () {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            if (event.strftime('%S') > 0) {
                $this.html(event.strftime('%S'));
            }
            else {
                $this.html(event.strftime('00'));
            }
        });
    });
}

// close searchBox results

$(document).click(function (e) {
    var container = $(".advanced-search-results.open, .searchBoxContent.open, .searchBoxOpener .nav-link.open");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass('open');
    }
});

// left-side canvas

function LeftSide() {
    $('.generalLeftSide').prependTo('#leftSide');
}

function centerMegaMenu() {
    if ($(window).width() > 991) {
        $(".home-nav ul .top-category > .dropdown-menu.gallery").each(function () {
            $(this).prependTo('.mega-menu');
        });
        $(".home-nav ul .top-category > .dropdown-menu.no-gallery").each(function () {
            $(this).prependTo('.simple-menu');
        });
        $(".home-nav ul .top-category > .dropdown-toggle").on('mouseover mouseenter mouseup',function () {
                var topCatId = $(this).data('catid');
                var dropdownPosition = $(this).offset().left;

                $('.mega-menu .dropdown-menu, .simple-menu .dropdown-menu').removeClass('show');
                $('.mega-menu').addClass('show');

                $('.mega-menu .dropdown-menu').each(function () {
                    var dropdownId = $(this).data('dropdownid');
                    if (topCatId == dropdownId) {
                        $(this).addClass('show');
                    }
                });

                $('.simple-menu .dropdown-menu').each(function () {
                    var dropdownId = $(this).data('dropdownid');
                    if (topCatId == dropdownId) {
                        $(this).css('left', dropdownPosition);
                        $(this).addClass('show');
                    }
                });

                if ($(this).hasClass('opened')) {
                    $('.mega-menu .dropdown-menu').removeClass('show');
                    window.location.replace($(this).attr('href'));
                } else {
                    $(".home-nav ul .top-category > .dropdown-toggle").removeClass('opened');
                }


        });
        $(".mega-menu").mouseleave(function () {
            $('.mega-menu .dropdown-menu').removeClass('show');
            $(this).removeClass('show');
        });
        $(".main-menu").mouseleave(function () {
            if ($('.simple-menu').is(':hover')) {

            } else {
                $('.simple-menu .dropdown-menu').removeClass('show');
                $(".simple-menu .dropdown-menu").mouseleave(function () {
                    $('.simple-menu .dropdown-menu').removeClass('show');
                    $('.simple-menu').removeClass('show');
                });
            }
        });
        $('.mega-menu .dropdown-menu .nav-link').click(function () {
            var pageToLoad = $(this).attr('href');
            if (pageToLoad.length) {
                window.location.replace(pageToLoad);
            }
        });
    }
}

// Safari Detector

function safariDetect() {
    const uA = navigator.userAgent;
    const vendor = navigator.vendor;
    if (/Safari/i.test(uA) && /Apple Computer/.test(vendor) && !/Mobi|Android/i.test(uA)) {
        $('body').addClass('safari');
    }
}

// flyCart on Cart fix 

function CartFix() {
    var pathname = window.location.pathname;
    if (pathname === '/cart') {
        $("#topcartlink").css("pointer-events", "none");
    }
}

$(document).ready(function () {

    safariDetect();
    CartFix();
    centerMegaMenu();
    mainMenuReplace();
    LeftSide();
    itemsStatistics();
    IpadMenuFix();
    dataCountdown();
    BackToTop();

    $(window).resize(function () {
        mainMenuReplace();
        IpadMenuFix();
        LeftSide();
        centerMegaMenu();
    });

    function newsletter_subscribe(subscribe) {
        var subscribeProgress = $("#subscribe-loading-progress");
        subscribeProgress.show();
        var postData = {
            subscribe: subscribe,
            email: $("#newsletter-email").val()
        };
        var href = $("#newsletterbox").closest('[data-href]').data('href');
        $.ajax({
            cache: false,
            type: "POST",
            url: href,
            data: postData,
            success: function (data) {
                subscribeProgress.hide();
                $("#newsletter-result-block").html(data.Result);
                if (data.Success) {
                    $('.newsletter-button-container, #newsletter-email, .newsletter-subscribe-unsubscribe').hide();
                    $('#newsletter-result-block').css('bottom', '10px').show();
                    if (data.Showcategories) {
                        $('#action_modal_form').html(data.ResultCategory);
                        window.setTimeout(function () {
                            $('.popup-action-form').magnificPopup('open');
                        }, 100);
                    }
                } else {
                    $('#newsletter-result-block').fadeIn("slow").delay(2000).fadeOut("slow");
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert('Failed to subscribe.');
                subscribeProgress.hide();
            }
        });
    }
    $('#newsletter-subscribe-button').click(function () {
        var allowToUnsubscribe = $("#newsletterbox").data('allowtounsubscribe').toLowerCase();
        if (allowToUnsubscribe == 'true') {
            if ($('#newsletter_subscribe').is(':checked')) {
                newsletter_subscribe('true');
            }
            else {
                newsletter_subscribe('false');
            }
        }
        else {
            newsletter_subscribe('true');
        }
    });

    $("#newsletter-email").keydown(function (event) {
        if (event.keyCode == 13) {
            $("#newsletter-subscribe-button").trigger("click")
            return false;
        }
    });

    $("#small-searchterms").click(function (e) {
        $(".formSearch").removeClass("col-lg-6");
        e.stopPropagation();
    });

    $('#small-searchterms').blur(function () {
        if ($(this).val().length === 0) {
            $(".advanced-search-results").removeClass("open");
        }
    });

    $('#small-searchterms').on('keydown', function () {
        var key = event.keyCode || event.charCode;

        if (key == 8 || key == 46)
            $(".advanced-search-results").removeClass("open");
    });

    $('.product-standard .review-scroll-button').on('click', function (e) {
        var el = $("#review-tab");
        var elOffset = el.offset().top;
        var elHeight = el.height();
        var windowHeight = $(window).height();
        var offset;
        if (elHeight < windowHeight) {
            offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
        }
        else {
            offset = elOffset;
        }
        $.smoothScroll({ speed: 300 }, offset);
        $("#review-tab").click();
        return false;
    });

    $('#ModalQuickView').on('hide.bs.modal', function (e) {
        $('#ModalQuickView').empty();
    });

    $('#ModalAddToCart .modal-dialog').on('click tap', function (e) {
        if ($(e.target).hasClass('modal-dialog')) {
            $('.modal').modal('hide');
        }
    });

    $(".mobile-search").click(function () {
        $("#small-search-box-form").appendTo("#searchModal .modal-content");
    });

    $("#searchModal").on("hidden.bs.modal", function () {
        $("#small-search-box-form").appendTo(".formSearch");
    });

});

function OpenWindow(query, w, h, scroll) {
    var l = (screen.width - w) / 2;
    var t = (screen.height - h) / 2;

    winprops = 'resizable=0, height=' + h + ',width=' + w + ',top=' + t + ',left=' + l + 'w';
    if (scroll) winprops += ',scrollbars=1';
    var f = window.open(query, "_blank", winprops);
}

function setLocation(url) {
    window.location.href = url;
}

function displayAjaxLoading(display) {
    if (display) {
        $('.ajax-loading-block-window').show();
    }
    else {
        $('.ajax-loading-block-window').hide('slow');
    }
}

function displayPopupNotification(message, messagetype, modal) {
    //types: success, error
    var container;
    if (messagetype == 'success') {
        //success
        container = $('#dialog_success');
        $('#dialog_error').html('');
    }
    else {
        //error
        container = $('#dialog_error');
        $('#dialog_success').html('');
    }

    //we do not encode displayed message
    var htmlcode = '';
    if ((typeof message) == 'string') {
        htmlcode = '<div class="generalMessage-container">' + message + '</div>';
    } else {
        for (var i = 0; i < message.length; i++) {
            htmlcode = htmlcode + '<p>' + message[i] + '</p>';
        }
    }
    container.html(htmlcode);
    container.show();
    $('#generalMessage').removeClass('fadeOutDown').addClass('fadeInDown show').show();
}

function CrossSell() {
    var CrossSellContent = $('.product-grid.cross-sells'),
        CrossSellModal = $('#ModalCrossSell .modal-content');
    CrossSellContent.prependTo(CrossSellModal);
}

function displayPopupAddToCart(html) {
    var dataOffcanvas = $('#right').data('offcanvas-component');
    dataOffcanvas.open();
    $('#PopupAddToCart').html(html);
    CrossSell();
}

function displayPopupQuickView(html) {
    $('#ModalQuickView').html(html).modal('show');
    $("body.modal-open").removeAttr("style");
    $(".navUp").removeAttr("style");
}
function displayPopupAddToWishlist(html) {
    $('#ModalAddToCart').html(html).modal('show');
    $("body.modal-open").removeAttr("style");
    $(".navUp").removeAttr("style");
}
function displayPopupOther(html) {
    $('#ModalAddToCart').html(html).modal('show');
    $("body.modal-open").removeAttr("style");
    $(".navUp").removeAttr("style");
}


var barNotificationTimeout;
function displayBarNotification(message, messagetype, timeout) {
    clearTimeout(barNotificationTimeout);

    //types: success, error
    var cssclass = 'success';
    if (messagetype == 'success') {
        cssclass = 'card-success';
    }
    else if (messagetype == 'error') {
        cssclass = 'card-danger';
    }
    //remove previous CSS classes and notifications
    $('#bar-notification')
        .removeClass('card-success')
        .removeClass('card-danger');
    $('#bar-notification .content').remove();

    //add new notifications
    var htmlcode = '';
    if ((typeof message) == 'string') {
        htmlcode = '<p class="content">' + message + '</p>';
    } else {
        for (var i = 0; i < message.length; i++) {
            htmlcode = htmlcode + '<p class="content">' + message[i] + '</p>';
        }
    }
    $('#bar-notification').append(htmlcode)
        .addClass(cssclass)
        .fadeIn('slow')
        .mouseenter(function () {
            clearTimeout(barNotificationTimeout);
        });

    $('#bar-notification .close').unbind('click').click(function () {
        $('#bar-notification').fadeOut('slow');
    });

    //timeout (if set)
    if (timeout > 0) {
        barNotificationTimeout = setTimeout(function () {
            $('#bar-notification').fadeOut('slow');
        }, timeout);
    }
}

function htmlEncode(value) {
    return $('<div/>').text(value).html();
}

function htmlDecode(value) {
    return $('<div/>').html(value).text();
}


// CSRF (XSRF) security
function addAntiForgeryToken(data) {
    //if the object is undefined, create a new one.
    if (!data) {
        data = {};
    }
    //add token
    var tokenInput = $('input[name=__RequestVerificationToken]');
    if (tokenInput.length) {
        data.__RequestVerificationToken = tokenInput.val();
    }
    return data;
};

function sendcontactusform(urladd) {
    if ($("#product-details-form").valid()) {
        var contactData = {
            AskQuestionEmail: $('#AskQuestionEmail').val(),
            AskQuestionFullName: $('#AskQuestionFullName').val(),
            AskQuestionPhone: $('#AskQuestionPhone').val(),
            AskQuestionMessage: $('#AskQuestionMessage').val(),
            Id: $('#AskQuestionProductId').val(),
            'g-recaptcha-response-value': $("input[id^='g-recaptcha-response']").val()
        };
        addAntiForgeryToken(contactData);
        $.ajax({
            cache: false,
            url: urladd,
            data: contactData,
            type: 'post',
            success: function (successprocess) {
                if (successprocess.success) {
                    $('#contact-us-product').hide();
                    $('.product-contact-error').hide();
                    $('.product-contact-send .card-body').html(successprocess.message);
                    $('.product-contact-send').show();
                }
                else {
                    $('.product-contact-error .card-body').html(successprocess.message);
                    $('.product-contact-error').show();
                }
            },
            error: function (error) {
                alert('Error: ' + error);
            }
        });
    }
}


function newAddress(isNew) {
    if (isNew) {
        this.resetSelectedAddress();
        $('#pickup-new-address-form').show();
    } else {
        $('#pickup-new-address-form').hide();
    }
}

function resetSelectedAddress() {
    var selectElement = $('#pickup-address-select');
    if (selectElement) {
        selectElement.val('');
    }
}

function deletecartitem(href) {
    var flyoutcartselector = AjaxCart.flyoutcartselector;
    var topcartselector = AjaxCart.topcartselector;
    $.ajax({
        cache: false,
        type: "POST",
        url: href,
        success: function (data) {
            var flyoutcart = $(flyoutcartselector, $(data.flyoutshoppingcart));
            $(flyoutcartselector).replaceWith(flyoutcart);
            $(topcartselector).html(data.totalproducts);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('Failed to retrieve Flyout Shopping Cart.');
        }
    });
    return false;
}

function itemsStatistics() {
    if ($('#items_statistics').length) {
        var totalItems = parseInt($('#items_statistics .items-total').text());
        var perPageFinal = parseInt($('.items-page-size').text());
        var currentPaggingSite = 0;
        if ($('.pagination').length) {
            currentPaggingSite = parseInt($('.pagination .current-page .page-link').text());
        } else {
            currentPaggingSite = 1;
        }
        if (totalItems < currentPaggingSite * perPageFinal) {
            $('#items_statistics .items-per-page .number').text(currentPaggingSite * perPageFinal - perPageFinal + 1 + ' - ' + totalItems);
        }
        else {
            $('#items_statistics .items-per-page .number').text(currentPaggingSite * perPageFinal - perPageFinal + 1 + ' - ' + currentPaggingSite * perPageFinal);
        }
    }
}