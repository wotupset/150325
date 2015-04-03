function poi(){
	$('div#ddd').html('');
	var t=0;
	//
	var timedown_x = setInterval(function() {
		t=t+1;
		//
		if(t<3600){
			$('div#ddd').html(t);
			timedown_x;//繼續跑迴圈
		}else{
			clearInterval(timedown_x);//關閉迴圈
		}
	}, 1000);
}