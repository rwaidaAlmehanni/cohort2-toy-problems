/*
For this exercise you will create a flatten function. 
The function takes in any number of arguments and flattens them into a single array. 
If any of the arguments passed in are an array then the individual objects within the array
will be flattened so that they exist at the same level as the other arguments. 
Any nested arrays, no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and what the expected results would be:

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']

*/

function flatten(){
<<<<<<< HEAD
	var arr=Array.from(arguments);
	var result=[];
	function nested(obj){
		for(var i=0;i<obj.length;i++){
			if(!Array.isArray(obj[i])){
				result.push(obj[i]);
			}
			else{
				nested(obj[i])
			}
		}
	return result;
     }
return nested(arr);

}
//O(n^2)
=======

}
>>>>>>> ae4eb3ea71b7d7dbe78fe9f7d97772c1cd6928d1
