<script type="text/javascript"> 

var orderedArray = function(count){
	var originalArray = new Array(); //原数组 
	//给原数组originalArray赋值 
	for (var i = 0; i < count; i++) {
		originalArray[i] = i + 1;
	}
}
var randomNumber = function(count){
  var originalArray=new Array();//原数组 
//给原数组originalArray赋值 
for (var i=0;i<count;i++){ 
originalArray[i]=i+1; 
} 
var d1=new Date().getTime(); 
originalArray.sort(function(){ return 0.5 - Math.random(); }); 


var d2=new Date().getTime(); 
var time = d2-d1;
return originalArray ;
}
</script> 
