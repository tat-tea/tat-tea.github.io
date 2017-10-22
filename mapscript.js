var map;
var marker = [];
var data = [];
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 35.170981, lng: 136.881556} ,
	zoom: 15
	});
	$.getJSON("station.json", function(json){
	for (var i = 0; i <= json.length-1; i++) {
		data.push(
			{
			'name': json[i].name,
			'lat': json[i].lat,
			'lng': json[i].lng
			}
		);
	};
	for (var i = 0; i < data.length; i++) {
		var lat = data[i].lat;
		var lng =  data[i].lng;
		var latlng = new google.maps.LatLng(lat, lng);
    	var marker = createMarker(data[i].name , lat, lng);
	
		markerLatLng = {lat: data[i].lat, lng: data[i].lng};
		marker[i] = new google.maps.Marker({
			position: markerLatLng,
			map: map
		});
		}
	});//jsonの閉じ
	
	
  function createMarker(name, _lat, _lng) {
	posi = {lat: _lat, lng: _lng};
    var marker = new google.maps.Marker({
	position: posi, 
	animation: google.maps.Animation.DROP,
	map: map
	});
    google.maps.event.addListener(marker, "click", function() {
      if (infowindow) infowindow.close();
      infowindow = new google.maps.InfoWindow({content: name});
      infowindow.open(map, marker);
    });
    return marker;
  }
}