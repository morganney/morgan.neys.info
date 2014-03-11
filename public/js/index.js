$(function() {
  var $map = $('#map'),
      hayward = new google.maps.LatLng(37.668821, -122.080796),
      sanjose = new google.maps.LatLng(37.339386, -121.894955),
      berkeley = new google.maps.LatLng(37.871593, -122.272747),
      oakland = new google.maps.LatLng(37.804364, -122.271114),
      bounds = new google.maps.LatLngBounds(),
      options = {
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
          position:  google.maps.ControlPosition.TOP_LEFT,
          style: google.maps.ZoomControlStyle.SMALL
        },
        styles: [
          {
            "stylers": [
              { "gamma": 0.5 }
            ]
          }
        ]
      },
      hmark = new google.maps.Marker({
        position: hayward,
        title: 'Hayward'
      }),
      smark = new google.maps.Marker({
        position: sanjose,
        title: 'San Jose'
      }),
      bmark = new google.maps.Marker({
        position: berkeley,
        title: 'Berkeley'
      }),
      omark = new google.maps.Marker({
        position: oakland,
        title: 'Oakland'
      }),
      map;

  bounds.extend(hayward);
  bounds.extend(sanjose);
  bounds.extend(berkeley);
  bounds.extend(oakland);

  // It appears 'center' and 'zoom' are not required when using fitBounds()
  map = new google.maps.Map($map.get(0),  options);

  hmark.setMap(map);
  smark.setMap(map);
  bmark.setMap(map);
  omark.setMap(map);

  map.fitBounds(bounds);
});
