/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	var result=1;
      array=array.sort(function(a,b){return a-b;});//O(n)
   for(var i=array.length-1; i>=array.length-3; i--){//O(1)
         result*=array[i];
      }
      return result;
};
//O(n)

var largestProductOfThree2 = function(array) {
	var r1,r2;
	array=array.sort(function(a,b){return a-b;});
	var arrpos=[],arrneg=[];
	console.log(array)
      for(var i=0;i<array.length;i++){
      	if(array[i]>=0){
      	arrpos.push(array[i])
      	}else{
      		arrneg.push(array[i]);
      	}
      
      }
    r1=arrneg[arrneg.length-1]*arrneg[arrneg.length-2]*arrpos[1];
    r2=	arrpos[arrpos.length-1]*arrpos[arrpos.length-2]*arrneg[1];
    console.log(r1,r2)
 return Math.max(r1,r2)
};



