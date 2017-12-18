function initMap() {

    // Center of focus - Emplacement
    var location = { lat: 50.793202, lng: 4.3197965 };

  // COLORS
  var palette = {
    geometry : {
      background : '#242f3e',
      highway : '#746855',
      road : '#38414e',
      park : '#263c3f',
      water : '#17263c',
      transit : '#2f3948',
      strokes : {
        highway : '#1f2835',
        roadDetails : '#212a37'
      }
    },
    labels : {
      labels : '#746855',
      location : '#d59563',
      highway : '#f3d19c',
      park : '#6b9a76',
      road : '#9ca5b3',
      water : '#515c6d',
      strokes : {
        water : '#17263c',
        label : '#242f3e'
      }
    }
  };

  // Map Customization Base
  var map = new google.maps.Map(document.getElementById('gmap'), {
    zoom: 16,
    center: location,
    styles: [
      {
        elementType: 'geometry',
        stylers: [{color: palette.geometry.background}]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [{color: palette.labels.strokes.label}]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [{color: palette.labels.label}]
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: palette.labels.location}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: palette.labels.location}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: palette.geometry.park}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: palette.labels.park}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: palette.geometry.road}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: palette.geometry.strokes.roadDetails}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: palette.labels.road}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: palette.geometry.highway}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: palette.geometry.strokes.highway}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: palette.labels.highway}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: palette.geometry.transit}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: palette.labels.location}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: palette.geometry.water}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: palette.labels.water}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: palette.labels.strokes.water}]
      }
    ]
  });


  // Marker Customization
  var iconBase = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: iconBase
  });
  marker.setAnimation(google.maps.Animation.BOUNCE);
  setTimeout(function () {
    marker.setAnimation(null);
  }, 800);
}
