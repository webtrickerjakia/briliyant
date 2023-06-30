(function ($) {
    $(function () {

        $('.hamburger-trigger').on('click', function () {
            $('body').toggleClass('navShown')
        })

        $(window).on('load', function () {
            setTimeout(function () {
                $('body').addClass('loaded')
            }, 500)
        })

        var $window = $(window);

        $('.suvnav').parent('li').addClass('has-sub-nav')
        if ($window.width() > 991) {
            $('.has-sub-nav').each(function () {
                var $this = $(this);

                $this.mouseenter(function () {
                    $this.find('.suvnav').fadeIn()
                })
                $this.mouseleave(function () {
                    $this.find('.suvnav').fadeOut();
                })
            })
        }
        if ($window.width() < 992) {
            $('.has-sub-nav').each(function () {
                var $this = $(this);

                $this.click(function (e) {
                    e.preventDefault();
                    $this.find('.suvnav').slideToggle()
                    $this.toggleClass("subnavShown");
                })
            })
        }


        if ($(".our-wrok-item-wrap").length) {
            if ($(window).width() > 767) {
                var swiper = new Swiper(".our-wrok-item-wrap.mySwiper", {
                    speed: 1100,
                    loop: false,
                    centeredSlides: false,
                    slidesPerView: '3',
                    spaceBetween: 24,
                    effect: "slide",
                })
            }
            if ($(window).width() < 768) {
                var swiper = new Swiper(".our-wrok-item-wrap.mySwiper", {
                    speed: 1100,
                    loop: false,
                    centeredSlides: false,
                    slidesPerView: '1',
                    spaceBetween: 15,
                    effect: "cards",
                    grabCursor: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                })
            }

        }


        //  venue-carousel function 
        if ($('.testimonial-item-wrap').length) {

            var currentSlide;
            var slidesCount;
            var sliderCounter = document.createElement('div');
            sliderCounter.classList.add('slide-count-wrap');

            var updateSliderCounter = function (slick, currentIndex) {
                currentSlide = slick.slickCurrentSlide() + 1;
                slidesCount = slick.slideCount;
                $(sliderCounter).html('<span class="current">' + '' + currentSlide + '</span>' + '<em>' + '/' + '</em>' + '<span class="total">' + '' + slidesCount + '</span>')
            };

            $('.testimonial-item-wrap').on('init', function (event, slick) {
                $('.testimonial-counter-and-arrow').prepend(sliderCounter);
                updateSliderCounter(slick);
            });

            var slickPrevBtn = $('.slick-prev');
            var slickNextBtn = $('.slick-next');

            $('.testimonial-item-wrap').slick({
                dots: false,
                arrows: true,
                autoplay: false,
                autoplaySpeed: 5000,
                infinite: false,
                navigation: false,
                fade: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: slickPrevBtn,
                nextArrow: slickNextBtn
            });
        }
        // End venue-carousel function 

        if ($('.our-clients-item-wrap').length) {
            $('.our-clients-item-wrap').slick({
                speed: 8000,
                autoplay: true,
                autoplaySpeed: 0,
                centerMode: false,
                cssEase: 'linear',
                slidesToShow: 1,
                draggable: false,
                focusOnSelect: false,
                pauseOnFocus: false,
                pauseOnHover: false,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                buttons: false
            });
        }


        // Start Secvice JS
        var swiper = new Swiper(".our-process-component-wrap.mySwiper", {
            speed: 1100,
            loop: false,
            centeredSlides: false,
            slidesPerView: '1',
            spaceBetween: 0,
            effect: "slide",
            freeMode: true,
            navigation: {
                nextEl: ".process-button-next",
                prevEl: ".process-button-prev",
            },
            breakpoints: {
                
                769: {
                    slidesPerView: '2.5',
                }
            }
        })

        if ($('.secondary-header').length) {
            $('header').addClass('secondary-header')
        }
        if ($('.header-black').length) {
            $('header').addClass('header-black')
        }

        var swiper = new Swiper(".services-slider-item-wrap.mySwiper", {
            speed: 1100,
            loop: false,
            centeredSlides: false,
            slidesPerView: '.5',
            spaceBetween: 0,
            effect: "slide",
            freeMode: true,
            navigation: {
                nextEl: ".services-slider-next",
                prevEl: ".services-slider-prev",
            },
            breakpoints: {
                
                768: {
                    slidesPerView: '1',
                }
            }
        })

        // Start Gallery JS
        
        if ($('.gallery-popup-item-wrap').length) {

            $('.gallery-popup-item-wrap').on('init', function (event, slick) {
                    $('.current').text(slick.currentSlide + 1);
                    $('.total').text(slick.slideCount);
                })
                .slick({
                    arrows: true,
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    pauseOnHover: false,
                    speed: 700,
                    infinite: false,
                    asNavFor: '.gallery-popup-title-wrap',
                    prevArrow: $('.popup-arrow-prev'),
                    nextArrow: $('.popup-arrow-next')
                })
                .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                    $('.current').text(nextSlide + 1);
                });

            $('.gallery-popup-title-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.gallery-popup-item-wrap',
                dots: false,
                arrows: false,
                infinite: false,
            });

            $('.gallery-item').click(function (e) {
                e.preventDefault()
                $('.gallery-popup-wrap').addClass('popup-active')
                var index = $(this).index();
                $('.gallery-popup-item-wrap').slick('slickGoTo', parseInt(index));
                setTimeout(function () {
                    $('.gallery-popup-inner').addClass('popup-active-inner')
                }, 1000)
            });



            $('.gallery-popup-wrap').click(function (e) {
                e.preventDefault()
                $('.gallery-popup-wrap').removeClass('popup-active')
                $('.gallery-popup-inner').removeClass('popup-active-inner')

            });
            $('.gallery-popup-inner').click(function (e) {
                e.stopPropagation();
            })
        }



        // Start Career JS
        $('.career-opportunities-filter-btn a').on('click', function (e) {
            e.preventDefault();
            $('.career-opportunities-filter').slideToggle()
        })


    }) // End ready function.


})(jQuery)