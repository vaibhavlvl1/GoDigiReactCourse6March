/*--------------------- Copyright (c) 2025 -----------------------
[Master Javascript]
Project: Data Analysis & Consulting html
-------------------------------------------------------------------*/
(function ($) {
  "use strict";
  var DataAnalytics = {
    initialised: false,
    version: 1.0,
    mobile: false,
    init: function () {
      if (!this.initialised) {
        this.initialised = true;
      } else {
        return;
      }
      /*-------------- Data Analysis & Consulting Functions Calling ---------------------------------------------------
		------------------------------------------------------------------------------------------------*/
      this.da_navbar();
      this.da_sticky_header();
      this.da_testimonial_slider();
      this.da_partner_slider();
      this.da_toggle_menu();
      this.da_counter();
      this.da_copyright();
    },

    /*-------------- Data Analysis & Consulting Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/
    // Navbar
    da_navbar: function () {
      $(".as-CommonClass-navbar").on("click", function (e) {
        var th = $(this).attr("top-h");
        var target = this.hash,
          $target = $(target);
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $target.offset().top - th,
            },
            100,
            "swing",
            function () {
              window.location.hash = target;
            }
          );
      });
    },
    // Navbar

    // sticky header
    da_sticky_header: function () {
      $(window).scroll(function () {
        var wh = window.innerWidth;
        {
          var h = window.innerHeight;
          var window_top = $(window).scrollTop() + 1;
          if (window_top > 100) {
            $(".da-header-wrapper").addClass("da-header-fixed");
          } else {
            $(".da-header-wrapper").removeClass("da-header-fixed");
          }
        }
      });
    },
    // sticky header
    // testimonial slider
    da_testimonial_slider: function () {
      var swiper = new Swiper(".da-client-wrapper .swiper-container", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        speed: 2500,
        pagination: {
          el: ".da-client-wrapper .swiper-pagination",
          clickable: true,
        },

        breakpoints: {
          1199: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        },
      });
    },
    // testimonial slider
    // partner slider
    da_partner_slider: function () {
      var swiper = new Swiper(".da-partner-wrapper .swiper-container", {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        speed: 2000,
        breakpoints: {
          1199: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        },
      });
    },
    // partner slider

    // toggle menu
    da_toggle_menu: function () {
      $(".da-toggle-btn").on("click", function () {
        $("body").toggleClass("menu-open");
      });
    },
    // toggle menu
    // counter
    da_counter: function () {
      $(".counting").text("");
      $(".counting").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-to");
        $({ countNum: $this.text() }).animate(
          { countNum: countTo },
          {
            duration: 3000,
            easing: "linear",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
    },
    // counter
    // copyright
    da_copyright: function () {
      document.getElementById("currentYear").textContent =
        new Date().getFullYear();
    },
    // copyright
  };
  DataAnalytics.init();
})(jQuery);
