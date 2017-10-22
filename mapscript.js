var map;
var marker = [];
var data = [];
function initMap() {
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
		marker[i] = new google.maps.Marker({
			position : markerLatLng,
			map : map,
			title : data[i].name
		});
	}

}