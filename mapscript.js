
//
var map;
var marker = [];
	var data = [
	{
	name: '東京駅',
	lat: 35.681391,
	lng: 139.766103
	}, {
	name: '新橋駅',
	lat: 35.666195,
	lng: 139.758587
	}, {
	name: '品川駅',
	lat: 35.62876,
	lng: 139.738999
	}
	];

function downloadData(){
	var req = new XMLHttpRequest();
  GDownloadUrl("station.json", function dispData(data, statusCode){
    var obj = eval("(" + data + ")");

    for (var i = 0; i < obj.marker.length; i++) {
      var lat = obj.marker[i].lat;
      var lng = obj.marker[i].lng;
      var name = obj.marker[i].name;

      map.addOverlay(createMarker(lat, lng, name));
    }
  });
}

function createMarker(lat, lng, name) {
  var marker = new GMarker(new GLatLng(lat, lng));

  var html = "<p>" + name + "</p>";
  GEvent.addListener(marker, "click", function(){
    marker.openInfoWindowHtml(html);
  });

  return marker;
}

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 35.681391, lng: 139.766103} ,
	zoom: 10
});
	map.data.loadGeoJson('station.json');
}