<script type="text/javascript"> 
var count=3000; 
var originalArray=new Array;//原数组 
//给原数组originalArray赋值 
for (var i=0;i<count;i++){ 
originalArray[i]=i+1; 
} 
var d1=new Date().getTime(); 
originalArray.sort(function(){ return 0.5 - Math.random(); }); 
for (var i=0;i<count;i++){ 
document.write(originalArray[i]+" , "); 
} 
var d2=new Date().getTime(); 
document.write("运算耗时"+(d2-d1)); 
</script> 
