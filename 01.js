function text_on(id,x){
	var FFF='';
	FFF=document.getElementById("body").innerHTML;
	document.getElementById("body").innerHTML='<span id="'+id+'">'+x+'</span>'+FFF;
	//
	$("#body").click(function(){
		t++;
	});
	//
	var t=0;
	var cc=0;
	while(!t){
		cc++;
		document.getElementById(id).innerHTML=cc;
		timedown_y(id);
	}
	//
	//$("#"+id+"").remove();//Ãö³¬¤¸¯À
}

function timedown_y(id){
	var timedown_x = setInterval(function() {
		if(t==0){
			timedown_x;//Ä~Äò¶]°j°é
		}else{
			clearInterval(timedown_x);//Ãö³¬°j°é
		}
	}, 100);
}