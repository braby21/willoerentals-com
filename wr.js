$(function() {

    $('#stihl-button').on('mouseover', function(){
        $(this).attr('src','images/stihl/en_button_small_a.png');
    }).on('mouseout', function(){
        $(this).attr('src','images/stihl/en_button_small_na.png');
    });    






    var currentYear = new Date();
    $('#footer-date').html("&copy;" + currentYear.getFullYear() + " Willoe Rentals");

    var width = 576;
    var animationSpeed = 2000;
    var pause = 5000;
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
                $slides.css('margin-left',-576);
            }
        });
    }

    function slideLeft() {
        $slides.animate({'margin-left': '+=' + width}, animationSpeed, function() {
            currentSlide--;
            if (currentSlide == 1)  {//if the current slide is the first slide
                currentSlide = $slide.length - 1;
                $slides.css('margin-left',-4032);
            }
        });
    }

    function startSlider() {
        interval = setInterval(function() {
            slideRight();
        }, pause);  
    }

    function pauseSlider() {
        clearInterval(interval);
    }
    
    $('.fa-arrow-circle-o-left').on('click', slideLeft);

    $('.fa-arrow-circle-o-right').on('click', slideRight);

    startSlider();

    $slide.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

    $('#submit-form').on('click', function(e){
        e.preventDefault();
        $('.form-container').css('visibility', 'hidden');
        $('.form-container').css('display', 'none');
        $('.overlay').css('visibility', 'hidden');
        $('.overlay').css('display', 'none');
        startSlider();    
    });

    $('#cancel-form').on('click', function(e) {
        e.preventDefault();
        $('.form-container').css('visibility', 'hidden');
        $('.form-container').css('display', 'none');
        $('.overlay').css('visibility', 'hidden');
        $('.overlay').css('display', 'none');
        startSlider();    
    });

    $('#form-launch').on('click', function(e){
        e.preventDefault();
        $('.form-container').css('visibility', 'visible');
        $('.form-container').css('display', 'block');
        $('#name').val('');
        $('#email').val('');
        $('#phone').val('');
        $('#comments').val('');
        $('.map-container').css('visibility', 'hidden');
        $('.map-container').css('display', 'none');
        $('.overlay').css('visibility', 'visible');
        $('.overlay').css('display', 'block');
        pauseSlider();

        /*
        var docHeight = $(document).height();

        $("body").append("<div id='overlay'></div>");

        $("#overlay")
        .height(docHeight)
        .css({
             'opacity' : 0.6,
             'position': 'absolute',
             'top': 0,
             'left': 0,
             'background-color': 'black',
             'width': '100%',
             'z-index': 1
        });

        */
    });


    $('#map-launch').on('click', function(e){
        e.preventDefault();
        $('.map-container').css('visibility', 'visible');
        $('.map-container').css('display', 'block');
        $('.form-container').css('visibility', 'hidden');
        $('.form-container').css('display', 'none');
        $('.overlay').css('visibility', 'visible');
        $('.overlay').css('display', 'block');
        pauseSlider();
        /*
        var docHeight = $(document).height();

        $('body').append("<div id='overlay'></div>");

        $('#overlay')
        .height(docHeight)
        .css({
             'opacity' : 0.6,
             'position': 'absolute',
             'top': 0,
             'left': 0,
             'background-color': 'black',
             'width': '100%',
             'z-index': 1,
             'visibility': 'visible'
        });
        */
    });


    $('.overlay').on('click', function(e){
        e.preventDefault();
        $('.map-container').css('visibility', 'hidden');
        $('.map-container').css('display', 'none');
        $('.form-container').css('visibility', 'hidden');
        $('.form-container').css('display', 'none');
        $('.overlay').css('visibility', 'hidden');
        $('.overlay').css('display', 'none');
        startSlider();
    });

/*
    $('body').on('click', function(e){

        if( $(e.target).hasClass('form-container') )
        {
            return
        }

        if( $(e.target).hasClass('map-container') )
        {
            return
        }


        if(e.target.id == 'map-launch') {
            e.preventDefault();
            $('.map-container').css('visibility', 'visible');
            $('.form-container').css('visibility', 'hidden');
            $('#overlay').css('visibility', 'visible');
            pauseSlider();
            return;
        }

        if(e.target.id == 'form-launch') {
            e.preventDefault();
            $('.form-container').css('visibility', 'visible');
            $('#name').val('');
            $('#email').val('');
            $('#phone').val('');
            $('#comments').val('');
            $('.map-container').css('visibility', 'hidden');
            $('#overlay').css('visibility', 'visible');
            pauseSlider();
            return;
        }

        $('#overlay').css('visibility', 'hidden');
        $('.map-container').css('visibility', 'hidden');
        $('.form-container').css('visibility', 'hidden');
        startSlider();


        if ($('.map-container').css('visibility') == 'visible') {
            $('.map-container').css('visibility', 'hidden');

            return;
        }

        if ($('.form-container').css('visibility') == 'visible') {
            $('.form-container').css('visibility', 'hidden');
            $('#overlay').css('z-index',-1);
            startSlider();
            return;
        }



    });
*/
    // cache the DOM
    var $rentalRatesTable = $('.rental-rates-table');

    $('#cat-nav-one').css('color','#00aa00');

    $('#cat-nav-one').on('click',function() {
        $rentalRatesTable.css('visibility','hidden');
        $('#cat-one').css('visibility','visible');
        $(this).siblings().css('color','#204288');
        $(this).css('color','#00aa00');
    })
    $('#cat-nav-two').on('click',function(){
        $rentalRatesTable.css('visibility','hidden')
        $('#cat-two').css('visibility','visible');
        $(this).siblings().css('color','#204288');
        $(this).css('color','#00aa00');
    });
    $('#cat-nav-three').on('click',function(){
        $rentalRatesTable.css('visibility','hidden');
        $('#cat-three').css('visibility','visible');
        $(this).siblings().css('color','#204288');
        $(this).css('color','#00aa00');

    });
    $('#cat-nav-four').on('click',function(){
        $rentalRatesTable.css('visibility','hidden');
        $('#cat-four').css('visibility','visible')
        $(this).siblings().css('color','#204288');
        $(this).css('color','#00aa00');
    });
    $('#cat-nav-five').on('click',function(){
        $rentalRatesTable.css('visibility','hidden');
        $('#cat-five').css('visibility','visible')
        $(this).siblings().css('color','#204288');
        $(this).css('color','#00aa00');
    });
    $('#cat-nav-six').on('click',function(){
        $rentalRatesTable.css('visibility','hidden');
        $('#cat-six').css('visibility','visible')
        $(this).siblings().css('color','#204288');
        $(this).css('color','#00aa00');
    });
    $('#cat-nav-seven').on('click',function(){
        $rentalRatesTable.css('visibility','hidden');
        $('#cat-seven').css('visibility','visible')
        $(this).siblings().css('color','#204288');
        $(this).css('color','#00aa00');
    });
    $('#cat-nav-eight').on('click',function(){
        $rentalRatesTable.css('visibility','hidden');
        $('#cat-eight').css('visibility','visible')
        $(this).siblings().css('color','#204288');
        $(this).css('color','#00aa00');
    });
    $('#cat-nav-nine').on('click',function(){
        $rentalRatesTable.css('visibility','hidden');
        $('#cat-nine').css('visibility','visible')
        $(this).siblings().css('color','#204288');
        $(this).css('color','#00aa00');
    });
    $('#cat-nav-ten').on('click',function(){
        $rentalRatesTable.css('visibility','hidden');
        $('#cat-ten').css('visibility','visible')
        $(this).siblings().css('color','#204288');
        $(this).css('color','#00aa00');
    });
    $('#cat-nav-eleven').on('click',function(){
        $rentalRatesTable.css('visibility','hidden');
        $('#cat-eleven').css('visibility','visible')
        $(this).siblings().css('color','#204288');
        $(this).css('color','#00aa00');
    });
    $('#cat-nav-twelve').on('click',function(){
        $rentalRatesTable.css('visibility','hidden');
        $('#cat-twelve').css('visibility','visible')
        $(this).siblings().css('color','#204288');
        $(this).css('color','#00aa00');
    });
    $('#cat-nav-thirteen').on('click',function(){
        $rentalRatesTable.css('visibility','hidden');
        $('#cat-thirteen').css('visibility','visible')
        $(this).siblings().css('color','#204288');
        $(this).css('color','#00aa00');
    });
    $('#cat-nav-fourteen').on('click',function(){
        $rentalRatesTable.css('visibility','hidden');
        $('#cat-fourteen').css('visibility','visible')
        $(this).siblings().css('color','#204288');
        $(this).css('color','#00aa00');
    });
    $('#cat-nav-fifteen').on('click',function(){
        $rentalRatesTable.css('visibility','hidden');
        $('#cat-fifteen').css('visibility','visible')
        $(this).siblings().css('color','#204288');
        $(this).css('color','#00aa00');
    });
    $('#cat-nav-sixteen').on('click',function(){
        $rentalRatesTable.css('visibility','hidden');
        $('#cat-sixteen').css('visibility','visible')
        $(this).siblings().css('color','#204288');
        $(this).css('color','#00aa00');
    });
    $('#cat-nav-seventeen').on('click',function(){
        $rentalRatesTable.css('visibility','hidden');
        $('#cat-seventeen').css('visibility','visible')
        $(this).siblings().css('color','#204288');
        $(this).css('color','#00aa00');
    });
    $('#cat-nav-eighteen').on('click',function(){
        $rentalRatesTable.css('visibility','hidden');
        $('#cat-eighteen').css('visibility','visible')
        $(this).siblings().css('color','#204288');
        $(this).css('color','#00aa00');
    });

}); //end document object function