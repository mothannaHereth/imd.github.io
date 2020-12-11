!(function($) {
    "use strict";
    // Skills section
    $('.skills-content').waypoint(function() {
        $('.progress .progress-bar').each(function() {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {
        offset: '80%'
    });

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 500,
            once: false
        });
    }

    function toggle() {
        var sec = document.getElementById('sec');
        var nav = document.getElementById('navigation');

        sec.classList.toggle('active')
        nav.classList.toggle('active')
    }


    // Porfolio isotope and filter
    $(window).on('load', function() {
        var projectsIsotope = $('.projects-container').isotope({
            itemSelector: '.projects-item'
        });

        $('#projects-flters li').on('click', function() {
            $("#projects-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            projectsIsotope.isotope({
                filter: $(this).data('filter')
            });
            aos_init();
        });

        // Initiate venobox (lightbox feature used in projects)
        $('.venobox').venobox({
            'share': false
        });

        // Initiate aos_init() function
        aos_init();

    });


    // Projects details carousel

    $(".projects-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });





    /* -------- CHECK NEXT / PREV -------- */
    function checknav() {

        thisgall = obj.data('gall');
        numeratio = obj.data('numeratio');
        gallItems = obj.data('gallItems');
        infinigall = obj.data('infinigall');
        share = obj.data('share');
        blockshare.html('');
        if (obj.data('vbtype') !== 'iframe' && obj.data('vbtype') !== 'inline' && obj.data('vbtype') !== 'ajax') {
            sharelinks = {
                pinterest: '<a target="_blank" href="https://pinterest.com/pin/create/button/?url=' + obj.prop('href') + '&media=' + obj.prop('href') + '&description=' + title + '">' + pinIcon + '</a>',
                facebook: '<a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=' + obj.prop('href') + '">' + fbIcon + '</a>',
                twitter: '<a target="_blank" href="https://twitter.com/intent/tweet?text=' + title + '&url=' + obj.prop('href') + '">' + twitterIcon + '</a>',
                linkedin: '<a target="_blank" href="https://www.linkedin.com/sharing/share-offsite/?url=' + obj.prop('href') + '">' + linkedinIcon + '</a>',
                download: '<a target="_blank" href="' + obj.prop('href') + '">' + downloadIcon + '</a>'
            };
            $.each(share, function(key, value) {
                blockshare.append(sharelinks[value]);
            });
        }

        if (gallItems) {
            items = gallItems;
        } else {
            items = $('.vbox-item[data-gall="' + thisgall + '"]');
        }

        if (items.length < 2) {
            infinigall = false;
            numeratio = false;
        }

        thenext = items.eq(items.index(obj) + 1);
        theprev = items.eq(items.index(obj) - 1);

        if (!thenext.length && infinigall === true) {
            thenext = items.eq(0);
        }

        // update gall numeration
        if (items.length >= 1) {
            gallIndex = items.index(obj) + 1;
            blocknum.html(gallIndex + ' / ' + items.length);
        } else {
            gallIndex = 1;
        }
        if (numeratio === true) {
            blocknum.show();
        } else {
            blocknum.hide();
        }

        // update title
        if (title !== '') {
            blocktitle.show();
        } else {
            blocktitle.hide();
        }

        // update navigation arrows
        if (!thenext.length && infinigall !== true) {
            $('.vbox-next').css('display', 'none');
            nextok = false;
        } else {
            $('.vbox-next').css('display', 'block');
            nextok = true;
        }

        if (items.index(obj) > 0 || infinigall === true) {
            $('.vbox-prev').css('display', 'block');
            prevok = true;
        } else {
            $('.vbox-prev').css('display', 'none');
            prevok = false;
        }
        // activate swipe
        if (prevok === true || nextok === true) {
            content.on(TouchMouseEvent.DOWN, onDownEvent);
            content.on(TouchMouseEvent.MOVE, onMoveEvent);
            content.on(TouchMouseEvent.UP, onUpEvent);
        }
    }

    /* -------- gallery navigation -------- */
    function navigateGall(destination) {

        if (destination.length < 1) {
            return false;
        }
        if (keyNavigationDisabled) {
            return false;
        }
        keyNavigationDisabled = true;

        overlayColor = destination.data('overlay') || destination.data('overlaycolor');

        framewidth = destination.data('framewidth');
        frameheight = destination.data('frameheight');
        border = destination.data('border');
        bgcolor = destination.data('bgcolor');
        dest = destination.data('href') || destination.attr('href');

        autoplay = destination.data('autoplay');

        title = (destination.data('titleattr') && destination.attr(destination.data('titleattr'))) || '';

    }
})(jQuery);