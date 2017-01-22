/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';
<<<<<<< HEAD
var Node=function(value){
	var node={}
	node.value=value;
	node.next=null;
	return node;
}

var LinkedList = function(){
 this.head=null;
 this.tail=null;
};
LinkedList.prototype.addToTail=function(value){
	var x=Node(value);
	if(this.head===null){
		this.head=x;
		this.tail=x;
	}else{
		this.tail.next=x;
		this.tail=this.tail.next;
	}
}
LinkedList.prototype.removeHead=function(){
	if(this.head){
		var temp=this.head.value;
		this.head=this.head.next;
	}
	return temp;
}
LinkedList.prototype.contains=function(target){
	var t=this.head,f=false;
	while(t){
		if(t.value!==target){
			t=t.next;
		}else{
			f=true;
			break;
		}
	}
	return f;
}

=======


var LinkedList = function(){
  //fill me in!
};
>>>>>>> 42a961f95ede9dc34c2125c99e247e9b7bf32aad

//write methods here!