//




const all = document.getElementById("all");
const vector = document.getElementById("vector");
const raster = document.getElementById("raster");
const uiux = document.getElementById("uiux");
const printing = document.getElementById("printing");

//
const allTab = document.getElementsByClassName("all");
const vectorTab = document.getElementsByClassName("vector");
const rasterTab = document.getElementsByClassName("raster");
const uiuxTab = document.getElementsByClassName("uiux");
const printingTab = document.getElementsByClassName("printing");

// mixitup



// var mixer = mixitup('.protfolio');

var containerEl = document.querySelector(".protfolio");

      var mixer = mixitup(containerEl, {
        animation: {
          animateResizeContainer: false, // required to prevent column algorithm bug
        },
      });

       //counter
    //    $(".counter").counterUp({
    //     delay: 10,
    //     time: 1000,
    //   });

// Owl Carousel Slider


   
//$('.owl-carousel').owlCarousel();


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    navigation : true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1200:{
            items:3
        }
    }
});


//  $("#owl-demo").owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:false,
    //     autoPlay:true,
    
    //     navigation : true,
    //     responsiveClass:true,
    //     responsive:{
    //         0:{
    //             items:1,
    //             nav:true
    //         },
    //         600:{
    //             items:3,
    //             nav:false
    //         },
    //         1000:{
    //             items:3,
    //             nav:true,
    //             loop:false
    //         }
    //     }
    //   });
    
// Owl Carousel Slider

//slick Slider

$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

//   logo slider

$('.logo-slider').slick({
    dots: true,
    infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
});


//testimonials

$('.testimonial').slick({
    dots: true,
    infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1000,
});



//slick Slider


