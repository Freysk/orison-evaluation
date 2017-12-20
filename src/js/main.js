var $menu = $('.menu'),
    $navbar = $('.navbar');

$('body').on('click', '.burger', function (){
  $navbar.slideToggle();
});

$(window).on({
    scroll: function() {
      if (window.matchMedia("(min-width: 960px)").matches) {
        if ( window.scrollY > 200 ) {
          $menu.css({ 'background-color' : '#212121'});
        } else {
          $menu.css({ 'background-color' : 'rgba(0,0,0,0)'});
        }
      }
    },
    resize: function() {
      if (window.matchMedia("(min-width: 960px)").matches) {
        $menu.css({ 'background-color' : 'rgba(0,0,0,0)'});
        $navbar.fadeIn();
      } else {
        $menu.css({ 'background-color' : '#212121'});
        $navbar.hide();
      }
    }
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
