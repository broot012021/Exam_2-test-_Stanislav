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

  /*==================== FROM HEADER TO PROJECTS ====================*/

  $(window).scroll(function(){
    if($(window).scrollTop()){
      $("nav").addClass("blu");
    } else {
      $("nav").removeClass("blu");
    }
  });

  /*==================== SHOW MENU ====================*/
var navMenu, navToggle, navClose

navToggle = document.getElementById( 'nav-toggle' );
navClose = document.getElementById( 'nav-close' );
navMenu = document.getElementById( 'nav-menu' );

if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}