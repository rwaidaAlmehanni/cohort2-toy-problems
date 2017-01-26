/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

// var spiralTraversal = function(matrix){
// 	var arr=matrix[0],j=matrix.length-1,n=1;
// 	while(n<matrix.length-1){
// 	for(var i=1;i<matrix.length;i++){
// 		if(i!==j){
//       arr.push(matrix[i][j])
// 	}else{
// 		for(var d=matrix[i].length-1;d>=0;d--){
// 			arr.push(matrix[i][d])
// 		}
// 		j--;
// 	}
// }
// n++;
// }
// return arr;
// };
// var spiralTraversal2 = function(matrix){
// 	var arr=[],f=1,j=matrix.length-1;
// 	for(var i=0;i<matrix.length;i++){
// 		if(f===1){
// 			for(var e=0;e<matrix.length;e++){
// 				arr.push(matrix[i][j])
// 			}
// 			f=2;
// 		}
// 		else if(f===2){
// 			for(var k=i;k<matrix.length-i;k++){
// 				arr.push(matrix[k][j])
// 			}
// 			f=3;
// 			j--;
// 		}
// 		else if(f===3){
// 			for(var e=j;e>=0;e--){
// 				arr.push(matrix[j][e])
// 			}
// 			f=4;
// 		}
// 		else if(f===4){
// 			for(var h=)
// 		}
// 	}

// return arr;
// };
// var spiralTraversal = function(matrix){
// 	var arr=matrix[0],j=matrix.length-1,n=1,f=1;
	
// 	for(var i=0;i<matrix.length;i++){
// 		if(f===1){
// 			for(var a=0;a<matrix.length;a++){
// 				arr.push(matrix[i][a]);
// 				f=2;
// 				x=a;
// 			}
// 		if(f===2){
// 			while(x<)
// 		}

// 		}
// 		if(i!==j){
//       arr.push(matrix[i][j])
// 	}else{
// 		for(var d=matrix[i].length-1;d>=0;d--){
// 			arr.push(matrix[i][d])
// 		}
// 		j--;
// 	}
// }
// n++;
// }
// return arr;
// };