$(document).ready(function(){
    $(".one").owlCarousel({
        nav: true,
        margin:20,
        responsiveClass:true,
    responsive:{
        0:{
            items:1,
         
        },
        600:{
            items:1,
            
        },
        1000:{
            items:3,
           
        }
    }
    });
  });