/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(num){
var x=Math.pow(2,num);
var result=1;
for(var i=0;i<num;i++){
	result*=2;
}
return result;
}
var powerOfTwo2 = function(num){
var x=Math.pow(2,num);
var result=1;
if(num>69){
var arr="590295810358705700000".split("")*1;
for(var i=0;i<num;i++){
	arr[i]=arr[i]*2;
	if(arr[i]>9)
		arr.splice(i+1,0,arr[i][1]);
}
}
return result;
}
