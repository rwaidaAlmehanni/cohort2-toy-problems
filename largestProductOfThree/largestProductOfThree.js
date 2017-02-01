/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
<<<<<<< HEAD
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
    r1=array[array.length-1]*array[array.length-2]*array[array.length-3];
    r2=	array[array.length-1]*array[0]*array[1];
 return Math.max(r1,r2)
};
=======
	
};

>>>>>>> 1fb158920ffe70da4fdfa3bb981fc802cd8c688a



