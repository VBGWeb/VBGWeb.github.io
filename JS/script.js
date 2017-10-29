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

new WOW().init();

/*$(document).ready(function()
     {$(".brandname").addClass('animated fadeInUp');
    });

$(document).ready(function()
     {$(".statement").addClass('animated fadeInUpBig');
    });*/

/*Hover on site images*/
$(".img-site").hover(
    function() {
        $(this).addClass('animated pulse');
    },
    function() {
        $(this).removeClass('animated pulse');
    });


$(".btn").hover(
    function() {
        $(this).addClass('animated rubberBand');
    },
    function() {
        $(this).removeClass('animated rubberBand');
    });


$('#typeDesing1').typeIt({
     strings: ["HTML5", "CSS3","JavaScript","Sass/Less","SublimeText","Photoshop","Illustrator"],
     speed: 2,
     cursor: false,
     autoStart: false
});

$('#typeDesing2').typeIt({
     strings: ["Adobe XD", "Sketch","inVision","Principle","Ionic","Bootstrap","Wordpress"],
     speed: 2,
     cursor: false,
     startDelay: 6000,
     autoStart: false
});

/*Hover on text*/
// $( ".animated-li strong" ).hover(
//   function() {
//     $( this ).addClass( "animated pulse" );
//   }, function() {
//     $( this ).removeClass( "animated pulse" );
//   }
// );