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

// de base, le plugin doit sélectionner les éléments de la page et les cacher
// ensuite avec le mm sélecteur, détecher leur position top au scroll et les afficher par rapport à la position dans la fênetre
