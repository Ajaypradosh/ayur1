$(document).ready(function() {
    let $listBg = $('.bg');
    let $tabs = $('.tab');
    let lastScrollTop = 0;
    let ticking = false;

    $(window).on('wheel', function(event) {
        event.preventDefault(); // Prevent default scrolling

        let delta = event.originalEvent.deltaY;
        let scrollSpeed = 0.4; // Adjusted for better smoothness
        let newScrollTop = $(window).scrollTop() + delta * scrollSpeed;

        $('html, body').stop().animate({ scrollTop: newScrollTop }, 150, 'linear');

        if (!ticking) {
            requestAnimationFrame(() => {
                handleScroll(newScrollTop);
                ticking = false;
            });
            ticking = true;
        }
    });

    function handleScroll(scrollTop) {
        let maxDepth = 2; // Prevents excessive movement

        $listBg.each(function(index) {
            let depthFactor = (index + 1) * 0.2; // Prevents  extreme parallax shifts
            let translateY = -scrollTop * depthFactor;

            $(this).css({
                'transform': `translateY(${translateY}px)`,
                'transition': 'transform 0.5s ease-out'
            });
        });

        // Text Movement - Matching Scroll Speed
        $tabs.each(function(index) {
            let $content = $(this).find('.content').first();
            let offsetTop = $(this).offset().top;
            let contentMove = Math.max(0, (scrollTop - offsetTop) * 0.3); // Balanced with parallax

            $content.css({
                'transform': `translateY(${contentMove}px)`,
                'transition': 'transform 0.5s ease-out'
            });
        });

        lastScrollTop = scrollTop;
    }
});
