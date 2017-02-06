/*
Pascal triangle is a triangle made with rows of numbers.
The first row is [1]. 
The second row is [1,1].
In all following rows, each number is the sum of the two directly above it.

For example, the pascal triangle with 4 rows is:

        1
      1   1
    1   2   1
  1   3   3   1

or in array form: [[1],[1,1],[1,2,1],[1,3,3,1]];

Read more about Pascal Triangle here:
http://en.wikipedia.org/wiki/Pascal's_triangle

Also, see the animated GIF file in this folder (open it in Chrome)

The task for this exercise is to write a function that given the number of rows, builds an array of arrays that represents the pascal triangle.

For example:
buildTriangle(3);// should output [[1],[1,1],[1,2,1]];
*/

var buildTriangle = function(numOfRows){
<<<<<<< HEAD
	var arr=[],temp=[];
	if(numOfRows === 1){
		arr.push([1]);
	}
	for(var i=0;i<numOfRows;i++){
         temp=[];
		for(var j=0; j<=i; j++){
			if(j===0 || j===i){
				temp.push(1)
			}else{
				temp.push(arr[i-1][j-1]+arr[i-1][j])
			}
		}
		arr.push(temp);
		
      
	}
	return JSON.stringify(arr);//to open it ...
	
}
//O(n^2)
=======
	
}
>>>>>>> 489641d63aec9a4741e9d52eb49286a5629cb485
		