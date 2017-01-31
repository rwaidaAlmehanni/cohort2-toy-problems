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




