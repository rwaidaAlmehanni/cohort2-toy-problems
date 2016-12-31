
/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/
function rps(n){
	var array=[],x=['rock','paper','scissors'],c=0;
	function genaret(k){
		var arr=[];
		for(var i=0;i<n;i++){
			for(var j=i;j<n;j++){
				arr.push(k);
			}
			console.log(arr)
			array.push(arr);
			arr=[];
		}
		return array;
	}
for(var i=0;i<n;i++){
  genaret(x[i]);
}
for(var s=0;s<array.length;s++){
	if(s===n*c){
		++c;
		continue;
	}
	else if(s===n*c+1){
		      for(var z=0;z<x.length-1;z++){
		      	for(var k=0;k<x;k++){
		      		var a=array[s];
		         if(a.indexOf(x[k])===-1 && a.length<n){a.push(x[k]); a=array[s];break;}
		      }
		  }
		}
    else{for(var d=0;d<x.length;d++){
    	if(array[s].indexOf(x[d])===-1){
    	 array[s].push(x[d])
    	}
    }}
    }
return array;

	}
