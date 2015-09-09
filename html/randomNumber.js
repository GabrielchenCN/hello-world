<script type = "text/javascript" >

var comparePushAndLoop = function(count){
	var originalArray1 = new Array(); 
	var originalArray2 = new Array(); 
	var time1, time2;
	var d1 = new Date().getTime();
	for (var i = 0; i < count; i++) {
		originalArray1[i] = i;
	}
	var d2 = new Date().getTime();
	time1 = d2 -d1;
	document.write("LOOP TIME :"+time1);

	var d3 = new Date().getTime();
	for (var i = 0; i < count; i++) {
		originalArray2.push(i);
	}
	var d4 = new Date().getTime();
	time2 = d4-d3;
	document.write("PUSH TIME :"+time2);
	if (time1>time2) {
		alert("push快于直接赋值")
	}
	else alert("push慢于直接赋值")
	;
}

var orderedArray = function(count){
	var originalArray = new Array(); //原数组 
	//给原数组originalArray赋值 
	for (var i = 0; i < count; i++) {
		originalArray[i] = i + 1;
	}
}



var randomNumber = function(count) {
	var originalArray = new Array(); //原数组 
	//给原数组originalArray赋值 
	for (var i = 0; i < count; i++) {
		originalArray[i] = i + 1;
	}
	var d1 = new Date().getTime();
	originalArray.sort(function() {
		return 0.5 - Math.random();
	});

	var d2 = new Date().getTime();
	var time = d2 - d1;
	return originalArray;
}


console.log(comparePushAndLoop(5000000));
</script>
