 new WOW().init();

 $(window).scroll(function () {
     var scroll = $(window).scrollTop();

     if (scroll >= 1) {
         $("header").addClass("shadow");
     } else {
         $("header").removeClass("shadow");
     }
 });

 //catCarousel js
 $("#catCarousel").owlCarousel({
     items: 2,
     margin: 20,
     nav: false,
     dots: true,
     responsive: {
         768: {
             items: 3,
             nav: true,
         },
         992: {
             items: 4,
             nav: true,
             dots: true,
         }
     }
 });

 //trendingCarousel js
 $("#trendingCarousel").owlCarousel({
     items: 2,
     margin: 20,
     nav: false,
     dots: false,
     responsive: {
         768: {
             items: 3
         },
         992: {
             items: 4
         }
     }
 });

 //newArrivalsjs
 $("#newArrivals").owlCarousel({
     items: 2,
     margin: 30,
     nav: false,
     dots: false,
     responsive: {
         768: {
             items: 3,
         },
         992: {
             items: 4
         }
     }
 });

 //shopBrand js
 $("#shopBrand").owlCarousel({
     items: 2,
     margin: 30,
     nav: false,
     dots: false,
     responsive: {
         768: {
             items: 3,
         },
         992: {
             items: 4
         }
     }
 });

 //blogCarousel js
 $("#blogCarousel").owlCarousel({
     items: 1,
     margin: 30,
     nav: false,
     dots: false,
     responsive: {
         0: {
             items: 1
         },
         567: {
             items: 2
         },
         768: {
             items: 2
         },
         992: {
             items: 3
         }
     }
 });

 //wistlist js
 $('.like').on('click', function () {
     $(this).toggleClass('active')
 })


 //banner text js
 var textWrapper = document.querySelector('.ml2');
 textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

 anime.timeline({
         loop: true
     })
     .add({
         targets: '.ml2 .letter',
         scale: [4, 1],
         opacity: [0, 1],
         translateZ: 0,
         easing: "easeOutExpo",
         duration: 1500,
         delay: (el, i) => 500 * i
     }).add({
         targets: '.ml2',
         opacity: 0,
         duration: 1500,
         easing: "easeOutExpo",
         delay: 100
     });
