$(function() {
  
    var currentYear = new Date();
    $('#footer-date').html("&copy;" + currentYear.getFullYear() + " Willoe Rentals");

    var width = 576;
    var animationSpeed = 2000;
    var pause = 4000;
    var currentSlide = 2;

    //cache the DOM
    var $slider = $('#slider');
    var $slides = $slider.find('.slides');
    var $slide = $slides.find('.slide');
    
    var interval;

    $('.slide-id').text(currentSlide);

    function slideRight() {
        $slides.animate({'margin-left': '-=' + width}, animationSpeed, function() {
            currentSlide++;
            $('.slide-id').text(currentSlide);
            if (currentSlide == $slide.length)  {//if the current slide is the same as the length aka the last slide    
                $('.slide-id').text(currentSlide);
                currentSlide = 2;
                $slides.css('margin-left',-680);
            }
        });
    }

    // function slideLeft() {
    //     $slides.animate({'margin-left': '+=' + width}, animationSpeed, function() {
    //         currentSlide--;
    //         if (currentSlide == 1)  {//if the current slide is the first slide
    //             currentSlide = $slide.length - 1;
    //             $slides.css('margin-left',-4032);
    //         }
    //     });
    // }

    function startSlider() {
        interval = setInterval(function() {
            slideRight();
        }, pause);  
    }

    function pauseSlider() {
        clearInterval(interval);
    }

    startSlider();

    $slide.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

    // // #Launch Form
    // $('#form-launch').on('click', function(e){
    //     if ($(window).width() < 720) {
    //         return
    //     } else {
    //         e.preventDefault();
    //         $('.form-container').css('display', 'block');
    //         $('#name').val('');
    //         $('#email').val('');
    //         $('#phone').val('');
    //         $('#inquiry').val('');
    //         $('.overlay').css('display', 'block');
    //         pauseSlider();
    //     }
    // });


    // #Form-Submit Button
    $('#submit-form').on('click', function(e){
            e.preventDefault();
            if(!$('#name').val() || !$('#email').val() || !$('#phone').val() || !$('#inquiry').val()){
                  $('.missing-fields-message').css('visibility','visible');
                  return;
            }
    });

    // cache the DOM
    var $rentalRatesTable = $('.rental-rates-table');
    var $backToRentalsMenu = $('.back-to-rentals-menu');

    $(function() {
      $('.rental-side-nav li a').on('click',function(e) {
        e.preventDefault();
        var data =  $(this).data('content');
        var contentDiv = '#content-' + data;
        $rentalRatesTable.css('display','none');
        $(contentDiv).css('display','block');
        $('.rental-side-nav a').css('color','#204288');
        $(this).css('color','#009900');
        if($(window).width() < 768) {
            $(this).parent().parent().parent().css('display','none');
            $backToRentalsMenu.css('display','block');
            $('.rental-side-nav a').css('color','#204288');
        }
      });
    });

    $backToRentalsMenu.on('click',function() {
        $('.rental-side-nav').css('display','block').find('li').css('color','#204288');
        $(this).css('display','none');
        $rentalRatesTable.css('display','none');
    });

    var mql = window.matchMedia("(min-width: 768px)");

    var handleMediaChange = function (mediaQueryList) {
    
        if (mediaQueryList.matches) {
            $backToRentalsMenu.css('display','none');
            $rentalRatesTable.css('display','none');
            $('.rental-side-nav').css('display','block');
            $('#content-air-compressors').css('display','block');
            $('#cat-nav-one').css('color','#009900');
        }
        else {
            $('.rental-side-nav').css('display','block').find('a').css('color','#204288');
            $rentalRatesTable.css('display','none');
            $backToRentalsMenu.css('display','none');
        }

    };
 
    mql.addListener(handleMediaChange);
    handleMediaChange(mql);


}); //end document object function