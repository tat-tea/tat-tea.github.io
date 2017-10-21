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

	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 35.681391, lng: 139.766103} ,
		zoom: 10
	});
	
	d3.json('station.json', function(data) {		
		//データレイヤーに追加
		map.data.addGeoJson(data);
		//イベント(マーカークリック時)を設定
		map.data.addListener('click', mouseClick);
	});
	
	function mouseClick(e) {
		//features->propertiesのaddressデータをクリック時に表示する
		alert(e.feature.getProperty('address'));	
	}
}