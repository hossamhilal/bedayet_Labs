/*global $ */
(function($) {
    "use strict";

    $(window).on('load', function(){
        $('body').addClass('stopScroll');
        $('.loader').fadeOut(500, function () {
            $(this).remove();
            $('body').removeClass('stopScroll');
        }); 
    });

    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function(){
        $('.sideNav').toggleClass('show');
        $('.bodyOverlay').addClass('show');  
        setTimeout(function(){
            $('body').addClass('stopScroll');
        }, 200); 
    });

    // Close Side Menu By Overlay
    $('.bodyOverlay').on('click', function(){
        $(this).removeClass('show');
        $('.sideNav').removeClass('show');  
        $('body').removeClass('stopScroll');  
    });

    // Close Side Menu By Close Icon
    $('.closeMenu').on('click', function(){
        $('.bodyOverlay').removeClass('show');
        $('.sideNav').removeClass('show');  
        $('body').removeClass('stopScroll');  
    });

    // Check if Rtl 
    var rtlVal = true ;   
    $('body').hasClass('en') ? rtlVal = false : rtlVal = true;

    
    // Header OWL 
    $('.owlHome').owlCarousel({
        rtl: rtlVal,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        dots: true,
        autoplaySpeed : 5000,
        autoplayTimeout : 5000,
        smartSpeed: 5000 ,
        navText: ["<i class='icofont-simple-right'></i>", "<i class='icofont-simple-left'></i>"],
        responsive: {
            0: {
                items: 1,
                dotsEach: 1
            },
            600: {
                items: 1,
                dotsEach: 1
            },
            1000: {
                items: 1,
                dotsEach: 1
            }
        }
    });

    // Analysis OWL 
    $('.owlAnalysis').owlCarousel({
        rtl: rtlVal,
        margin: 0,
        autoplay: true,
        loop: false,
        nav: false,
        dots: true,
        autoplaySpeed : 5000,
        autoplayTimeout : 5000,
        smartSpeed: 5000 ,
        navText: ["<i class='icofont-simple-right'></i>", "<i class='icofont-simple-left'></i>"],
        responsive: {
            0: {
                items: 1,
                dotsEach: 1
            },
            600: {
                items: 1,
                dotsEach: 1
            },
            1000: {
                items: 1,
                dotsEach: 1
            }
        }
    });

    // Water OWL 
    $('.owlWater').owlCarousel({
        rtl: rtlVal,
        margin: 0,
        autoplay: true,
        loop: false,
        nav: false,
        dots: true,
        autoplaySpeed : 5000,
        autoplayTimeout : 5000,
        smartSpeed: 5000 ,
        navText: ["<i class='icofont-simple-right'></i>", "<i class='icofont-simple-left'></i>"],
        responsive: {
            0: {
                items: 1,
                dotsEach: 1
            },
            600: {
                items: 1,
                dotsEach: 1
            },
            1000: {
                items: 1,
                dotsEach: 1
            }
        }
    });

    // Show / Hide Scroll Button 
    $(window).scroll( function(){
        let sT =  $('.footer').offset().top - 500,
            wT =  $(this).scrollTop();
        if ( wT > sT ){
            $('.up').addClass('show');
          } else {
            $('.up').removeClass('show');
          }
    });

    // Scroll To Top 
    $('.up').click( function() {
        $('html, body').animate({ 
            scrollTop: 0
        }, 2000);
    });

    // Open Certificate 
    $('.showCertificate').on('click', function(){
        let src = $(this).data('src');
        console.log('src' , src)
        $('#certificateImg').attr('src' , src);
    });

    // INPUT ANIMATION 
    $('.filedInput').each(function() { 
        if ($(this).val() != "") {
            $(this).parent('.field').addClass('focused');   
        }
    });

    $('.filedInput').focus(function(){
        $(this).parent().addClass('focused');
    });

    $('.filedInput').focusout(function(){
        if($(this).val() === "") $(this).parent('.field').removeClass('focused');
    });

    $('button[type="reset"]').on('click' , function(){
        $('.field').removeClass('focused');
    });
   
})(jQuery);

