function poi(){
	$('div#ddd').html('');
	//
	var timedown_x = setInterval(function() {
		if(t<3600){
			$('div#ddd').html(t);
			timedown_x;//Ä~Äò¶]°j°é
		}else{
			clearInterval(timedown_x);//Ãö³¬°j°é
		}
	}, 1000);
}