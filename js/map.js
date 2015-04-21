function initialize() {
  var mapOptions = {
    zoom: 9,
    center: new google.maps.LatLng(34.854378,-111.795138),
    scrollwheel: false
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  //var image = "http://i.neoseeker.com/mgv/499846/846/33/15847_179440563793_179437393793_2772323_4548598_n_icon.jpg";
  var myLatLng = new google.maps.LatLng(34.854378,-111.795138);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    //icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);