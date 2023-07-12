$( function() {

    var wind = $(window);

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: false,
        live: false
    });
    wow.init();

    // scrollIt
    $.scrollIt({
        upKey: 38,                // key code to navigate to the next section
        downKey: 40,              // key code to navigate to the previous section
        easing: 'linear',         // the easing function for animation
        scrollTime: 700,          // how long (in ms) the animation takes
        activeClass: 'active',    // class given to the active nav element
        onPageChange: null,       // function(pageIndex) that is called when page is changed
        topOffset: -100            // offste (in px) for fixed top navigation
      });


    // ---------- nav scroll -----------
    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar")

        if (bodyScroll > 200) {

            navbar.addClass("nav-scroll");

        } else {

            navbar.removeClass("nav-scroll");
        }
    });
    

    // ---------- to top -----------
    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            toTop = $(".to_top")

        if (bodyScroll > 700) {

            toTop.addClass("show");

        } else {

            toTop.removeClass("show");
        }
    });
    
    // ------- to top -------
    $('.to_top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 0);
        return false;
    });

    // ------ sidemenu 7 ------
    $(".side_menu_btn").on("click", function() {
        $(this).toggleClass("active");
        $("#side_menu").toggleClass("show");
        $(".side_overlay").toggleClass("show");
    })

    $(".side_menu_cls").on("click", function() {
        $("#side_menu").removeClass("show");
        $(".side_overlay").removeClass("show");
    })

    $(".side_overlay").on("click", function() {
        $("#side_menu").removeClass("show");
        $(this).removeClass("show");
    })

    // --------- navbar active ---------
    $(".faq-category li a").on("click", function() {
        $(this).addClass("active");
        $(this).parent().siblings().children("a").removeClass("active");
    })

    // --------- navbar active ---------
    // $(".navbar").on( "click", ".nav-link" , function(){
    //     $(this).addClass("active");
    //     $(this).parents(".nav-item").siblings().find(".nav-link").removeClass("active");
    // })


    /* ==============  priceing_s2  ============== */
    $('#monthly-input2').on('change', function() {
        $(".yearly_price , .monthly_price").toggleClass("show");
    });
    /* ==============  priceing_s5  ============== */
    $('#monthly-input').on('change', function() {
        $(".monthly_price").show();
        $(".monthly_price").siblings(".yearly_price").hide();
    });
    $('#yearly-input').on('change', function() {
        $(".yearly_price").show();
        $(".yearly_price").siblings(".monthly_price").hide();
    });


/* ===============================  projects style-12  =============================== */
    var containerEl = document.querySelector('.projects.style-12 .items');
    var mixer = mixitup(containerEl);
    // ----- active & unactive -----
    $(".mix_tabs").on("click" , ".tab-link" , function(){
        $(this).addClass("active").siblings().removeClass("active");
    })




    // -------- counter --------
        $('.counter').countUp({
            delay: 10,
            time: 2000
        });

    // -------- blog effect --------
    $(".blog .blog_box").mouseenter(function(){
        $(this).find(".text").slideDown();
    })
    $(".blog .blog_box").mouseleave(function(){
        $(this).find(".text").slideUp();
    })

      // --------- fav btn ---------
  $(".fav-btn").on("click" , function(){
        $(this).toggleClass("active");
    })

    // --------- grid list view ---------
    $(".grid-list-btns").on( "click", ".bttn" , function(){
        $(this).addClass("active").siblings().removeClass("active");
    })

    $(".grid-list-btns").on( "click", ".list-btn" , function(){
        $(".products-content .products").addClass("list-view");
    })

    $(".grid-list-btns").on( "click", ".grid-btn" , function(){
        $(".products-content .products").removeClass("list-view");
    })


    // ------------ increase products -----------
    $(".qt-plus").click(function() {
        $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);
    });

    $(".qt-minus").click(function() {

        child = $(this).parent().children(".qt");

        if (parseInt(child.html()) > 1) {
            child.html(parseInt(child.html()) - 1);
        }

        $(this).parent().children(".full-price").addClass("minused");

    });

});

 // ---------- hover dropdown -----------
 const $dropdown = $(".dropdown");
 const $dropdownToggle = $(".dropdown-toggle");
 const $dropdownMenu = $(".dropdown-menu");
 const showClass = "show";

 $(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 768px)").matches) {
      $dropdown.hover(
        function() {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function() {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });
  



// ------------ swiper sliders -----------
$(document).ready(function() {
    var swiper = new Swiper('.portfolio-slider .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
            el: ".portfolio-slider .swiper-pagination"
        },
        navigation: {
            nextEl: '.portfolio-slider .swiper-button-next',
            prevEl: '.portfolio-slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ blog sliders -----------
    var swiper = new Swiper('.blog_slider .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
            el: ".blog_slider .swiper-pagination"
        },
        navigation: {
            nextEl: '.blog_slider .swiper-button-next',
            prevEl: '.blog_slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        // loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ services sliders -----------
    var swiper = new Swiper('.services_slider .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
            el: ".services_slider .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.services_slider .swiper-button-next',
            prevEl: '.services_slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ works sliders -----------
    var swiper = new Swiper('.works_slider .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
            el: ".works_slider .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.works_slider .swiper-button-next',
            prevEl: '.works_slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

    // ------------ works sliders -----------
    var swiper = new Swiper('.reviews_slider .swiper-container', {
        effect: "fade",
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: {
            el: ".reviews_slider .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.reviews_slider .swiper-button-next',
            prevEl: '.reviews_slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
    });

    // ------------ works sliders -----------
    var swiper = new Swiper('.testimonial-slider.style-3 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 100,
        speed: 1000,
        pagination: {
            el: ".testimonial-slider.style-3 .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonial-slider.style-3 .swiper-button-next',
            prevEl: '.testimonial-slider.style-3 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ works sliders -----------
    var swiper = new Swiper('.screenshots-slider.style-4 .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });
      
    // ------------ clients sliders -----------
    let SwiperBottom = new Swiper('.clients-slider5 .swiper-container', {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 6,
    speed: 6000,
    autoplay: {
        delay: 1,
    },
    loop: true,
    allowTouchMove: false,
    disableOnInteraction: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 2,
        },
        787: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 6,
        }
    }
    });
      
    // ------------ testimonial sliders -----------
    var swiper = new Swiper('.testimonial-slider.style-5 .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 0,
        speed: 1000,
        pagination: {
            el: ".testimonial-slider.style-5 .swiper-pagination",
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ services sliders -----------
    var swiper = new Swiper('.services-slider.style-6 .swiper-container', {
        slidesPerView: 6,
        centeredSlides: true,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 6,
            }
        },
        on: {
            slideChange: function () {
              var activeIndex = this.activeIndex;
              var realIndex = this.slides.eq(activeIndex).attr('data-swiper-slide-index');
             $('.swiper-slide').removeClass('swiper-slide-nth-prev-2 swiper-slide-nth-next-2');
             $('.swiper-slide[data-swiper-slide-index="'+realIndex+'"]').prev().prev().addClass('swiper-slide-nth-prev-2');
             $('.swiper-slide[data-swiper-slide-index="'+realIndex+'"]').next().next().addClass('swiper-slide-nth-next-2');
            },
          }
    });

    // ------------ works sliders -----------
    var swiper = new Swiper('.slider-3items .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 0,
        speed: 1000,
        pagination: {
            el: ".slider-3items .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.slider-3items .swiper-button-next',
            prevEl: '.slider-3items .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ works sliders -----------
    var swiper = new Swiper('.testi-slider.style-6 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.testi-slider.style-6 .swiper-button-next',
            prevEl: '.testi-slider.style-6 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true
    });

    // ------------ works sliders -----------
    var swiper = new Swiper('.blog-details-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        speed: 1000,
        pagination: {
            el: ".blog-details-slider .swiper-pagination",
            clickable: "true",
        },
        navigation: {
            nextEl: '.blog-details-slider .swiper-button-next',
            prevEl: '.blog-details-slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true
    });

    // ------------ related-postes-slider -----------
    var swiper = new Swiper('.related-postes-slider .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 80,
        centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.related-postes-slider .swiper-button-next',
            prevEl: '.related-postes-slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ related-postes-slider -----------
    var swiper = new Swiper('.culture-slider .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: "true",
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ gallery-thumbs-slider -----------
    var galleryThumbs = new Swiper('.product .gallery-thumbs', {
        spaceBetween: 20,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: 'vertical',
    });
    var galleryTop = new Swiper('.product .gallery-top', {
        spaceBetween: 10,
        navigation: false,
        thumbs: {
            swiper: galleryThumbs
        }
    });

    // ------------ related-postes-slider -----------
    var swiper = new Swiper('.related-products-slider .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 24,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.related-products-slider .swiper-button-next',
            prevEl: '.related-products-slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });

    // ------------ features-slider7 -----------
    var swiper = new Swiper('.features-slider7 .swiper-container', {
        spaceBetween: 50,
        centeredSlides: true,
        // slidesPerView: 6,
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    //   allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ projects-slider7 -----------
    var swiper = new Swiper('.projects-slider7 .swiper-container', {
        // slidesPerView: 5,
        spaceBetween: 40,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.projects.style-7 .swiper-button-next',
            prevEl: '.projects.style-7 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        observer: true,
        observeParents: true,
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

    // ------------ testimonials-slider -----------
    var swiper = new Swiper('.testimonials-slider7 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

    // ------------ features-slider7 -----------
    var swiper = new Swiper('.services-slider8 .swiper-container', {
        spaceBetween: 50,
        // centeredSlides: true,
        // slidesPerView: 6,
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    //   allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ features-slider7 -----------
    var swiper = new Swiper('.imgs-content-slider .swiper-container', {
        spaceBetween: 50,
        // centeredSlides: true,
        // slidesPerView: 6,
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    //   allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ features-slider7 -----------
    var swiper = new Swiper('.careers-positions-slider5 .swiper-container', {
        spaceBetween: 30,
        // centeredSlides: true,
        // slidesPerView: 6,
        speed: 1000,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        pagination: false,
        navigation: {
            nextEl: '.careers-positions-slider5 .swiper-button-next',
            prevEl: '.careers-positions-slider5 .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


    // ------------ works sliders -----------
    var swiper = new Swiper('.projects-slider8 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1200,
        pagination: false,
        navigation: {
            nextEl: '.projects.style-8 .swiper-button-next',
            prevEl: '.projects.style-8 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: false,
    });

     // ------------ about2-imgs-slider -----------
     var swiper = new Swiper('.about2-imgs-slider .swiper-container', {
        spaceBetween: 50,
        // centeredSlides: true,
        // slidesPerView: 6,
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    //   allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ login sliders -----------
    var swiper = new Swiper('.sign-imgs-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: {
            el: ".sign-imgs-slider .swiper-pagination",
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
    });

    // ------------ login sliders -----------
    var swiper = new Swiper('.testimonials-slider11 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: {
            el: ".testimonials-slider11 .swiper-pagination",
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
    });


    // ------------ features-line-slider12 -----------
    var swiper = new Swiper('.features-line-slider12 .swiper-container', {
        spaceBetween: 0,
        centeredSlides: true,
        // slidesPerView: 6,
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    //   allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

    // ------------ collections-slider12 -----------
    var swiper = new Swiper('.collections-slider12 .swiper-container', {
        spaceBetween: 30,
        // centeredSlides: true,
        // slidesPerView: 6,
        speed: 1000,
        autoplay: {
            delay: 5000,
        },
        loop: false,
        pagination: false,
        navigation: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ projects-slider13 -----------
    var swiper = new Swiper('.projects-slider13 .swiper-container', {
        spaceBetween: 30,
        // centeredSlides: true,
        // slidesPerView: 6,
        observer: true,
        observeParents: true,
        speed: 1000,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        pagination: false,
        navigation: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

    // ------------ projects-slider13 -----------
    var swiper = new Swiper('.testimonials-slider14 .swiper-container', {
        spaceBetween: 50,
        // centeredSlides: true,
        // slidesPerView: 6,
        speed: 1000,
        autoplay: {
            delay: 5000,
        },
        loop: false,
        pagination: false,
        navigation: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

});


/* ===============================  Preloader page  =============================== */
$( function() {

    paceOptions = {
        ajax: true,
        document: true,
        eventLag: false
    };

    Pace.on('done', function () {
        $('#preloader').addClass("isdone");
        $('.loading').addClass("isdone");
    });
  } );

