var source   = document.getElementById("gallery-template").innerHTML;
var template = Handlebars.compile(source);

var url     = "https://api.flickr.com/services/rest/";
var apiKey  = "2e5cb45d96ca23a115f127cd8b52245f";
var method  = 'flickr.photos.search';
var search  = "lamp";
var options = {
  api_key: apiKey,
  method: method,
  format: 'json',
  nojsoncallback: 1,
  safe_search: 1,
  tags: search,
  per_page: 5,
  extras: 'url_o',
  size: 'q'
};

$.getJSON(url,options)
  .done(function(data){
    var photos = data.photos.photo;
    photos.forEach(function(e){
      e.size = options.size;
    });
    var html = template(photos);
    $('.flickr_gallery').append(html);
  })
  .fail(function(){
    console.log('something went wrong :(');
  });

$('.gallery').on('click', '.gallery__photo', function(){
  url = $(this).data('lightbox');

  var img = '<img src = ' + url + '>';
  $('.overlay').html(img).fadeIn();
});
$('.overlay').click(function(){
  $(this).fadeOut();
});
