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
  var req = new XMLHttpRequest();		  // XMLHttpRequest オブジェクトを生成する
  req.onreadystatechange = function() {		  // XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
    if(req.readyState == 4 && req.status == 200){ // サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合
      alert(req.responseText);		          // 取得した JSON ファイルの中身を表示
    }
  };
  req.open("GET", "station.json", false); // HTTPメソッドとアクセスするサーバーの　URL　を指定
  req.send(null);					    // 実際にサーバーへリクエストを送信
}