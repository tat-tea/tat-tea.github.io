var map;
var marker = [];


function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 35.681391, lng: 139.766103},
	zoom: 10
	});
	
	// マーカー毎の処理
	
	var markerdata;
	var req = new XMLHttpRequest();
	req.open('GET', 'station.json');
	req.onreadystatechange = function(event){
		if(req.readyState == 4){
			if(req.status == 200){
				data = eval( '(' + req.responseText + ')' );
				for(var i = 0; i < data.length; i++){
		    	markerLatLng = new google.maps.LatLng({lat: markerData[i].lat, lng: markerData[i].lng}); // 緯度経度のデータ作成
		    	marker[i] = new google.maps.Marker({ // マーカーの追加
		    	position: markerLatLng, // マーカーを立てる位置を指定
				  	});
				}
			} else {
				alert('json読み込みエラー');
			}
		}
	}
}

function getJSON() {
	// XMLHttpRequest オブジェクトを生成する
	var req = new XMLHttpRequest();
	
	// XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
	req.onreadystatechange = function() {
	
		// サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合
		if(req.readyState == 4 && req.status == 200){
			// 取得した JSON ファイルの中身を表示
			var elem = eval('(' + req.responseText + ')');
			alert(elem.length);
		}
	};
	// HTTPメソッドとアクセスするサーバーの　URL　を指定
	req.open("GET", "station.json"); 
	// 実際にサーバーへリクエストを送信
	req.send(null); 
	
}