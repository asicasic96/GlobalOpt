(function () {
    "use strict";
  
    var carousels = function () {
      $(".owl-carousel1").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 10000,
        smartSpeed: 1000,
        nav: true,
        navText: ["<img src='icons/carousel/prev.png'>", "<img src='icons/carousel/next.png'>"],
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: false
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      });
    };
    
    (function ($) {
      carousels();
    })(jQuery);
  })();
  