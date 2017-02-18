/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/


/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {

	var f=true;
	for(var i=0;i<this.length;i++){
		if(arr.indexOf(this[i])<0){
			f=false;

		}
	}
return f;
}
//extra ...

Array.prototype.isSubsetOf2 = function (arr) {
	var f=true;
	for(var a=0; a<arr.length; a++){
		if(typeof arr[a]==="object"){
			arr[a]=JSON.stringify(arr[a]);
		}
	}
	console.log(arr)
	for(var i=0; i<this.length; i++){
		if(typeof this[i]==="object"){
				this[i]=JSON.stringify(this[i]);
				}
	   if(arr.indexOf(this[i])<0){
			f=false;
		       }	
		}
	return f;	
		
	}//O(n^2)

=======

}

=======

}

