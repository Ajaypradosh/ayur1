$(document).ready(function() {
    let $listBg = $('.bg');
    let $banner = $('.banner');
    let $tabs = $('.tab');
    let $container = $('.container');
    let heightDefault = $container.outerHeight();
    let topBefore = 0;
    let $body = $('body');

    $(window).on('wheel', function(event) {
        event.preventDefault();
        const scrollSpeed = 0.2;
        const scrollValue = $(window).scrollTop() + (event.originalEvent.deltaY / 3) * scrollSpeed;
        $('html, body').scrollTop(scrollValue);

        let top = scrollValue;
        $listBg.each(function(index) {
            if (index !== 0) {
                $(this).css({
                    'transform': `translateY(${(-top * index)}px)`,
                    'transition': 'transform 1s ease-in-out'
                });
            }
            if (index === $listBg.length - 1) {
                $tabs.each(function() {
                    $(this).css({
                        'transform': `translateY(${(-top * index)}px)`,
                        'transition': 'transform 0.5s ease-in-out'
                    });
                });

                if (topBefore < top) {
                    let setHeight = heightDefault - $(window).scrollTop() * index;
                    $container.css({
                        'height': `${(setHeight + 100)}px`,
                        'transition': 'height 0.05s ease-in-out'
                    });
                    topBefore = $(window).scrollTop();
                }
            }
            $tabs.each(function(index) {
                if (($(this).offset().top - top) <= $(window).height() * (index + 1)) {
                    let $content = $(this).find('.content').first();
                    let transformContent = $(window).height() * (index + 1) - ($(this).offset().top - top);
                    $content.css({
                        'transform': `translateY(${(-transformContent + (100 * index))}px)`,
                        'transition': 'transform 0.5s ease-in-out'
                    });
                }
            });
        });
    });
});
