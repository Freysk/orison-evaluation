var $toReveal = $('[data-sr="toReveal"]');
// utiliser un data sur les éléments à cacher et à révéler

$(document).ready( function(){
  $toReveal.css({ 'opacity' : '0'});
});
$(document).scroll( function() {
  // $('[data-sr="toReveal"]').forEach(function(){
  // if ( $(this).scrollTop ) {
  //   $toReveal.animate({ 'opacity' : '1'});
  // }
  // });
  // voir ici https://code.i-harness.com/fr/q/38ae44
});
