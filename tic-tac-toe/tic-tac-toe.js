/*
Imagine you are playing a game of tic-tac-toe and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/
function minorOrMaj(array){//create array of major && minor ...
	var arr=[],board=[],j=0;
	for(var i=0;i<array.length;i++){
		arr.push(array[i][i]);
	} 
	board.push(arr);
	arr=[];
	for(var i=array.length-1;i>=0;i--){
		arr.push(array[j][i])
		j++;	
	}
	board.push(arr)
	return board;
}
//__________________________________________________________
function colArray(array){//create array of colums ....
	var arr=[],board=[];
	for(var i=0;i<array.length;i++){
		for(j=0;j<array.length;j++){
			arr.push(array[j][i])
		}
		board.push(arr);
		arr=[];
	}
	return board;	
}
//_____________________________________________________	
function rowOrCol(board){
return board.reduce(function(acc,row){//create object the value is the number of item in row...
	for(var i=0;i<row.length;i++){
		if(acc[row[i]]===undefined){
			acc[row[i]]=1;
		}
		else{
			acc[row[i]]++;
		}
	}
	return acc;
},{})
}
//___________________________________________________________	
function test(obj){//test the value of every row...
	var x;
	console.log(obj)
	for(var k in obj){
		if(obj[k]===3){
			x=(k*1)-1
			if(x>0 && k!==0){
			return x;
			}	
		}
	}
	return -1
}	
//______________________________________________	
function ticTacToe(board){//test all the cases....
	var x=test(rowOrCol(board));
	var y=test(rowOrCol(colArray(board)));
	var z=test(rowOrCol(minorOrMaj(board)));	
	if(x>-1)return x;
	else if(y>-1)return y;
	else return z;    
};
