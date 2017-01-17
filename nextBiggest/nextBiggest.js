/*

**** PICK ONE OF THE TWO PROBLEMS ****

Problem 1 (Medium):
Create a function named "rotate" that takes an array and returns a new one
with the elements inside rotated n spaces.

If n is greater than 0 it should rotate the array to the right. 
If n is less than 0 it should rotate the array to the left. 
If n is 0, then it should return the array unchanged.

Examples:

Should work on arrays of any data types:
rotate(['a', 'b', 'c'], 1)     // => ['c', 'a', 'b']
rotate([1.0, 2.0, 3.0], 1)     // => [3.0, 1.0, 2.0]
rotate([true, true, false], 1) // => [false, true, true]

var data = [1, 2, 3, 4, 5];
rotate(data, 1) // => [5, 1, 2, 3, 4]
rotate(data, 2) // => [4, 5, 1, 2, 3] 5 4 
rotate(data, 5) // => [1, 2, 3, 4, 5] 
rotate(data, 0) // => [1, 2, 3, 4, 5]
rotate(data, -1) // => [2, 3, 4, 5, 1]
rotate(data, -2) // => [3, 4, 5, 1, 2]
rotate(data, -5) // => [1, 2, 3, 4, 5]

The rotation shouldn't be limited by the indices available in the array. 
Meaning that if we exceed the indices of the array it keeps rotating.

rotate(data, 7)     // => [4, 5, 1, 2, 3]
rotate(data, 11)    // => [5, 1, 2, 3, 4]
rotate(data, 12478) // => [3, 4, 5, 1, 2]

*/
function rotate(array, steps){
	var x;
	if(steps>0){
	   for(var i=0;i<steps;i++){
          array.unshift(array.pop())
	    }
	}
	else if(steps<0){
		    for(var i=steps;i<0;i++){
                x=array[0];
                array=array.slice(1)
		        array.push(x)
	           }
          }
	return array;
}

/*
Problem 2 (Advanced)
You have to create a function that takes a positive integer number and returns the 
next bigger number formed by the same digits:

Exanmples:
nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071

If no bigger number can be composed using those digits, return -1:

nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
*/
function createArrStr(n,num){
	var s=[],arr=num.toString().split(""),l=arr.length;
	var t=arr,result;
	for(var i=0;i<=arr.length;i++){
		var arr=t;
		//console.log(arr)
		result.push((arr.splice(i,0,n).join(""))*1);
	}
	return result;
}

function nextBigger(num){
	var s=num.toString(),arr=[],x;
	if(s.length===1){return -1}
    for(var i=0;i<s.length;i++){
    	 arr.concat(createArrStr(s[i],s.slice(i,1)))
    }
    var j=arr.indexOf(num);
    arr=arr.slice(j,1);
    x=Math.max(...arr)
   if(x>num){
   	return x;
   };
   return -1;
}