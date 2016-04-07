/*! Smooth Scroll */
smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
    selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
    speed: 800, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeOutQuad', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    updateURL: true, // Boolean. If true, update the URL hash on scroll
    callback: function(anchor, toggle) {} // Function to run after scrolling
});

$.stellar();

/*Hover buttons site images*/
$(".btn-hover").hover(
    function() {
        $(this).addClass('animated pulse');
    },
    function() {
        $(this).removeClass('animated pulse');
    });
/*
$("#btn-hover2").hover(
    function() {
        $("#btn-hover2").addClass('animated pulse');
    },
    function() {
        $("#btn-hover2").removeClass('animated pulse');
    });
*/