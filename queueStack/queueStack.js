/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
  this.stack=[];

   // add an item to the top of the stack

   this.push = function(value){
   	this.stack.push(value);
   };

   // remove an item from the top of the stack
   this.pop = function(){
   	this.stack.pop();
   };

   // return the number of items in the stack
   this.size = function(){
   	return this.stack.length;
   };
 };

 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();

   // called to add an item to the `queue`
   this.enqueue = function(value){
   	inbox.stack=[];
   	inbox.stack.push(value);
   	if(outbox>0&&inbox===0){
   for(var i=outbox.stack.length-1;i>=0;i--){
   		inbox.stack.push(outbox.stack.pop());
   	}}
   	console.log(inbox.stack)
     
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
   	//outbox.stack=[];
   	if(inbox>0&&outbox===0){
   	for(var i=0;i<inbox.stack.length;i++){
   		outbox.stack.push(inbox.stack.pop());
   	}
   }
   console.log(outbox.stack)
   };

   // should return the number of items in the queue
   this.size = function(){
   	var x=outbox.stack.size()+inbox.stack.size();
   	return x;
   };
 };