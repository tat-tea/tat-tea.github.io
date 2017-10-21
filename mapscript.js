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

for (var i = 0; i < data.length; i++) {
	markerLatLng = {lat: data[i]['lat'], lng: data[i]['lng']};
	strtitle = {name: markerLatLng}
	marker[i] = new google.maps.Marker({
	position: markerLatLng,
	map: map,
	title: data[i]['name']
});
}
}