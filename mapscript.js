var map;
var marker = [];
var data = [];
function initMap() {
	var myLatlng = new google.maps.LatLng(-25.363882, 131.044922);
	var mapOptions = {
		zoom : 4,
		center : myLatlng
	}
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);

	var marker = new google.maps.Marker({
		position : myLatlng,
		title : "Hello World!"
	});

	// To add the marker to the map, call setMap();
	marker.setMap(map);

	/*

	map = new google.maps.Map(document.getElementById('map'), {
		center : {
			lat : 35.170981,
			lng : 136.881556
		},
		zoom : 15
	});

	//同期処理
	$.ajaxSetup({
		async : false
	});
	$.getJSON("station.json", function(json) {
		for (var i = 0; i <= json.length - 1; i++) {
			data.push(
				{
					'name' : json[i].name,
					'lat' : json[i].lat,
					'lng' : json[i].lng
				}
			);
		}
		;
	}); //jsonの閉じ
	$.ajaxSetup({
		async : true
	});

	//マーカを立てる
	for (var i = 0; i < data.length; i++) {
		markerLatLng = {
			lat : data[i].lat,
			lng : data[i].lng
		};

		var marker = new google.maps.Marker({
			position : markerLatLng,
			map : map,
			title : data[i].name
		});

		marker.setMap(map);

	}

	*/

}