/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */
var primeTester = function(n) {

	if(n===2 || n===3){
		return true;
	}
	for(var i=2;i<=Math.sqrt(n);i++){
		if(n%i===0){
			return false
		}
	}
	return true;
}
var inclusive=function(n){
	var arr=[],j=-1;
	for(var i=2;i<=n;i++){
		arr.push(i);
	}
	for(var i=2;i<=n;i++){
		for(var j=i+1;j<=n;j++){
			if(j%i===0){
			  arr.splice(arr.indexOf(j),1);
			}
		}
	}
	return arr;
=======


}

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */

  