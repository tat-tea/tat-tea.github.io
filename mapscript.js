	var map;
	var data;
	
	//load json
	alert('いくぜ');
	var req = new XMLHttpRequest();
	req.open('GET', 'station.json');
	req.onreadystatechange = function(event){
		if(req.readyState == 4){
			var div = document.getElementById('test');
			if(req.status == 200){
				data = eval( '(' + req.responseText + ')' );
			} else {
				alert('json読み込みエラー');
			}
		}
	
	};
	req.send();
	}
	
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 35.681391, lng: 139.766103} ,
		zoom: 10
		});
		
		for(var i = 0; i < data.length; i++){
					
			var marker = new google.maps.Marker({
			    position: (data[i].lat, data[i].lng),
			    map: map,
			    name: data[i].name
		  	});
		}
	
	}