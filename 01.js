function poi(){
	$('div#ddd').html('');
	//
	var timedown_x = setInterval(function() {
		if(t<3600){
			$('div#ddd').html(t);
			timedown_x;//�~��]�j��
		}else{
			clearInterval(timedown_x);//�����j��
		}
	}, 1000);
}