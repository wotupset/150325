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
		$('video#bgvid').attr('src','');//「空」
	});
	$("#button01").click(function(){
		//alert(tmp);//
		$('video#bgvid').attr('src','http://static.mengniang.org/common/2/29/KancollebgmA01.mp3');//「母港」
	});
	$("#button02").click(function(){
		$('video#bgvid').attr('src','http://static.mengniang.org/common/b/b2/KancollebgmA02.mp3');//「工廠」
	});
	$("#button03").click(function(){
		$('video#bgvid').attr('src','http://static.mengniang.org/common/c/cb/KancollebgmA03.mp3');//「出擊」
	});
	$("#button04").click(function(){
		$('video#bgvid').attr('src','http://static.mengniang.org/common/2/25/KancollebgmB01.mp3');//「晝戰」
	});
	$("#button05").click(function(){
		$('video#bgvid').attr('src','http://static.mengniang.org/common/6/66/KancollebgmB03.mp3');//「夜戰」
	});
	$("#button06").click(function(){
		$('video#bgvid').attr('src','http://static.mengniang.org/common/4/43/KancolleBgmMiiro.mp3');//「海色」
	});
	$("#button07").click(function(){
		$('video#bgvid').attr('src','http://static.mengniang.org/common/b/bd/KancolleBgmFubuki.mp3');//「吹雪」
	});
}


