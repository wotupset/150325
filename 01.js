function poi(){
	$('div#ddd').html('');
	//
	//test1();
	test2()
}

function test1(){
	var t=0;
	//
	var timedown_x = setInterval(function() {
		t=t+1;
		//
		if(t<3600*24){
			$('div#ddd').html(t);
			timedown_x;//繼續跑迴圈
		}else{
			clearInterval(timedown_x);//關閉迴圈
		}
	}, 1000);
}

function test2(){
	var tmp='';
	$("#button00").click(function(){
		//alert(tmp);//
		tmp='<video controls autoplay loop width="320" height="240" id="bgvid"><source src="http://static.mengniang.org/common/2/29/KancollebgmA00.mp3" type="audio/mpeg"></video>';
		$('div#ddd').html(tmp);
	});
	$("#button01").click(function(){
		//alert(tmp);//
		tmp='<video controls autoplay loop width="320" height="240" id="bgvid"><source src="http://static.mengniang.org/common/2/29/KancollebgmA01.mp3" type="audio/mpeg"></video>';
		$('div#ddd').html(tmp);
	});
	$("#button02").click(function(){
		//alert(tmp);//
		tmp='<video controls autoplay loop width="320" height="240" id="bgvid"><source src="http://static.mengniang.org/common/b/b2/KancollebgmA02.mp3" type="audio/mpeg"></video>';
		$('div#ddd').html(tmp);
	});
}