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
markerLatLng = {lat: data[i]['lat'], lng: data[i]['lng']};
marker[i] = new google.maps.Marker({
position: markerLatLng,
map: map
});
}
});//jsonの閉じ
}