var map;
var marker = [];
var data = [];
function initMap() {
	var myLatlng = new google.maps.LatLng(35.170981, 136.881556);
	var mapOptions = {
		zoom : 15,
		center : myLatlng
	}
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);

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

	var next = new google.maps.LatLng(140.7, 41.01);
	var next2 = new google.maps.LatLng(data[0].lat, data[0].lng);

	var marker = new google.maps.Marker({
		position : next,
		title : data[0].name
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