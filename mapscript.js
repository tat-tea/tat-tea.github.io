	var map;
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 35.681391, lng: 139.766103} ,
		zoom: 10
		});
		
		var data;
		var req = new XMLHttpRequest();
		req.open('GET', 'station.json');
		req.onreadystatechange = function(event){
			if(req.readyState == 4){
				if(req.status == 200){
					data = eval( '(' + req.responseText + ')' );
					for(var i = 0; i < data.length; i++){
						var marker = new google.maps.Marker({
						    position: (data[i].lat, data[i].lng),
						    name: data[i].name
						    map: map
					  	});
					}
				} else {
					alert('json読み込みエラー');
				}
			}
		};
	}