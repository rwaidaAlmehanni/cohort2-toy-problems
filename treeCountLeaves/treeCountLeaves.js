/**
  * Implement the `countLeaves` function in this Tree class.
  *
  * A leaf node is any node in the tree that has no children. `countLeaves` should
  * traverse the tree, and return the number of leaf nodes the tree contains.
  *
  * Illustration of a tree with three leaves:
  *
  *       * <- root
  *      / \
  *     *    * <- leaf
  *    / \
  *   *   * <- leaf
  *  /
  * * <- leaf
  *
  * Example usage:
  *   var root = new Tree();
  *   root.countLeaves(); // 1
  *   root.addChild(new Tree());
  *   root.countLeaves(); // still 1
  *   root.addChild(new Tree());
  *   root.children[0].addChild(new Tree());
  *   root.children[0].addChild(new Tree());
  *   root.children[0].children[0].addChild(new Tree());
  *   root.countLeaves(); // 3
  *
  */

/*
 * Basic tree that stores a value.
 */

var Tree = function(value){
  this.value = value;
  this.children = [];
};




Tree.prototype.countLeaves = function () {
	var str=JSON.stringify(this);
	var count=0;
	for(var i=0;i<str.length;i++){
		if(str[i]==="["){
			++count;
		}
	}
	return count;
}

/**
  * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
	this.children.push(child);
  
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
   var str=JSON.stringify(this);
   var ch=JSON.stringify(child);
   if(str.indexOf(ch)>-1){
   	return true;
   }
   return false;
  
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
	var str=JSON.stringify(this);
	var ch=JSON.stringify(child);
	var result=str.replace("{'children':"+ch+"}","");
	return JSON.parse(result); // the tree after removing the child...
};
//