function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
      mapId: "fd7310634cc1c5ea",
      center: { lat: 31.839, lng: -106.556 },
      zoom: 7,
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT
      }
  });
}


