	var map;
	
	//load json
	function loadJson(){
	alert('いくぜ');
	var req = new XMLHttpRequest();
	req.open('GET', 'station.json');
	req.onreadystatechange = function(event){
		if(req.readyState == 4){
			var div = document.getElementById('test');
			if(req.status == 200){
				var txt = req.responseText
				var data = eval('(' + txt + ')');
				for(var i = 0 ; i < data.length(); i++){
					
					alert(data[i].name);
				
				}
			} else {
				div.innerHTML = 'json読み込みエラー';
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
	
}