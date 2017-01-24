/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 * Example rotation of a 4x4 matrix:
 *
 * var matrix = [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,'A','B','C'],
 *  ['D','E','F','G']
 * ];
 *
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
 * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
 *  ['F','B',7,3],
 *  ['G','C',8,4]
 * ]
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
 * Extra credit:
 *  - Make your function operate on rectangular matrices (MxN rather than NxN).
 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */

var rotateMatrix =function (matrix) {
	var newMatr=[] , subArr=[];
	for(var i=0 ; i<matrix[0].length ; i++){
		if(i%2 === 0){//if the index even start from up...
			for(var j=0 ; j<matrix.length ; j++){
                 subArr.push( matrix[j][i] );
			}
		}else{// if the index is odd start from down ....
				for(var j=matrix.length-1 ; j>=0 ; j--){
					subArr.push( matrix[j][i] );
				}

			}
			newMatr.push(subArr);
			subArr=[];
		}
		return newMatr;
	}
	//O(n^2)
///////////////////
var rotateMatrix2 =function (matrix,parameter) {
	var newMatr=[] , subArr=[];
	 if(parameter>0){
	  for(var i=0 ; i<matrix[0].length ; i++){
		if(i%2 === 0){//if the index even start from up...
			for(var j=0 ; j<matrix.length ; j++){
                 subArr.push( matrix[j][i] );
			}
		}else{// if the index is odd start from down ....
				for(var j=matrix.length-1 ; j>=0 ; j--){
					subArr.push( matrix[j][i] );
				}

			}
			newMatr.push(subArr);
			subArr=[];
		}
	}else{	 
	  for(var i=0 ; i<matrix[0].length ; i++){
		if(i%2 !== 0){//if the index odd start from up...
			for(var j=0 ; j<matrix.length ; j++){
                 subArr.push( matrix[j][i] );
			}
		}else{// if the index is even start from down ....
				for(var j=matrix.length-1 ; j>=0 ; j--){
					subArr.push( matrix[j][i] );
				}

			}
			newMatr.push(subArr);
			subArr=[];
		}
	}
	return JSON.stringify(newMatr);
}
//O(n^2)
	
