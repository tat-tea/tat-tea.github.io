var map;
var marker = [];
var data = [];
var markerData = [ // マーカーを立てる場所名・緯度・経度
	{
		name : 'TAM 東京',
		lat : 35.6954806,
		lng : 139.76325010000005,
		icon : 'tam.png' // TAM 東京のマーカーだけイメージを変更する
	}, {
		name : '小川町駅',
		lat : 35.6951212,
		lng : 139.76610649999998
	}, {
		name : '淡路町駅',
		lat : 35.69496,
		lng : 139.76746000000003
	}, {
		name : '御茶ノ水駅',
		lat : 35.6993529,
		lng : 139.76526949999993
	}, {
		name : '神保町駅',
		lat : 35.695932,
		lng : 139.75762699999996
	}, {
		name : '新御茶ノ水駅',
		lat : 35.696932,
		lng : 139.76543200000003
	}
];

function initMap() {
	var myLatlng = new google.maps.LatLng(35.6954806, 139.76325);
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
					name : json[i].name,
					lat : parseFloat(json[i].lat),
					lng : parseFloat(json[i].lng)
				}
			);
		}
		;
	}); //jsonの閉じ
	$.ajaxSetup({
		async : true
	});

	for (var i = 0; i < data.length; i++) {
		markerLatLng = new google.maps.LatLng({
			lat : data[i]['lat'],
			lng : data[i]['lng']
		}); // 緯度経度のデータ作成
		marker[i] = new google.maps.Marker({ // マーカーの追加
			position : markerLatLng, // マーカーを立てる位置を指定
			map : map // マーカーを立てる地図を指定
		});
	}
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