window.initMap = () => {
  const hayward = new google.maps.LatLng(37.668821, -122.080796)
  const sanjose = new google.maps.LatLng(37.339386, -121.894955)
  const berkeley = new google.maps.LatLng(37.871593, -122.272747)
  const oakland = new google.maps.LatLng(37.804364, -122.271114)
  const quitman = new google.maps.LatLng(32.7959605, -95.4510641)
  const coarsegold = new google.maps.LatLng(37.2621687, -119.7009834)
  const bounds = new google.maps.LatLngBounds()
  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.TOP_LEFT,
      style: google.maps.ZoomControlStyle.SMALL
    },
    styles: [
      {
        stylers: [{ gamma: 0.5 }]
      }
    ]
  }
  const hmark = new google.maps.Marker({
    position: hayward,
    title: 'Hayward'
  })
  const smark = new google.maps.Marker({
    position: sanjose,
    title: 'San Jose'
  })
  const bmark = new google.maps.Marker({
    position: berkeley,
    title: 'Berkeley'
  })
  const omark = new google.maps.Marker({
    position: oakland,
    title: 'Oakland'
  })
  const qmark = new google.maps.Marker({
    position: quitman,
    title: 'Quitman'
  })
  const cmark = new google.maps.Marker({
    position: coarsegold,
    title: 'Coarsegold'
  })
  // It appears 'center' and 'zoom' are not required when using fitBounds()
  const map = new google.maps.Map(document.getElementById('map'), options)

  bounds.extend(hayward)
  bounds.extend(sanjose)
  bounds.extend(berkeley)
  bounds.extend(oakland)
  bounds.extend(quitman)
  bounds.extend(coarsegold)

  hmark.setMap(map)
  smark.setMap(map)
  bmark.setMap(map)
  omark.setMap(map)
  qmark.setMap(map)
  cmark.setMap(map)

  map.fitBounds(bounds)
}
