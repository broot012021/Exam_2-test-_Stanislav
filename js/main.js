$(document).ready(function(){
    $('.wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
      });
  });

  $(window).scroll(function(){
    if($(window).scrollTop()){
      $("nav").addClass("blu");
    } else {
      $("nav").removeClass("blu");
    }
  });