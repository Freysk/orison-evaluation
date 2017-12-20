var $toReveal = $('.reveal');

$(document).ready( function(){
  $toReveal.css({ 'opacity' : '0'});
});
$(window).scroll( _.throttle( reveal, 500 )  );
function reveal(){
  var wBot = $(window).scrollTop() + $(window).height();
  $toReveal.each(function() {
    var posTop = $(this).offset().top;
    if (posTop < wBot) {
      $(this).animate({ "opacity" : "1" }, 500);
    }
  });
}
