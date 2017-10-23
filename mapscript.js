var map;
var marker = [];
var data = [];

function initMap() {
	var myLatlng = new google.maps.LatLng(35.6954806, 139.76325);
	var mapOptions = {
		zoom : 10,
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
					name : json[i].name,
					lat : Number(json[i].lat),
					lng : Number(json[i].lng)
				}
			);
		}
		;
	}); //jsonの閉じ
	$.ajaxSetup({
		async : true
	});

	//jsonの書き込み
	
	
	for (var i = 0; i < data.length; i++) {

		var flat = parseFloat(data[i].lat);
		var flng = parseFloat(data[i].lng);

		markerLatLng = new google.maps.LatLng({
			lat : flat,
			lng : flng
		}); // 緯度経度のデータ作成
		marker[i] = new google.maps.Marker({ // マーカーの追加
			position : markerLatLng, // マーカーを立てる位置を指定
			name : data[i].name,
			map : map // マーカーを立てる地図を指定
		});
	}
}
