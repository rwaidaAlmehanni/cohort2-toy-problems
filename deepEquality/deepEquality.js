/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
  var getObj=function(obj){

  	var s= "";

  	if(typeof obj==="string"){
  		s+= obj;
  	} 
  	else if(typeof obj==="number"){
  		s+= obj;
  	}
  	else if(Array.isArray(obj)){
  		for(var i=0 ; i<obj.length ; i++){
  			s+= getObj(obj[i]);
  		}
  	}
  	else if(typeof obj === "object"){
  		for(var k in obj){
  			s+= getObj(k) + getObj(obj[k]);
  		}

  	}
  	return s;
  }

  var deepEquals = function(obj1, obj2){
  	 var s1=getObj(obj1);
  	 var s2=getObj(obj2);
  	    if(s1.length!==s2.length){
  		   return false;
  	      }
  	    for(var i=0;i<s1.length;i++){
  		   if(s1[i]!==s2[i]){
  			   return false;
  		   }
  	    }
  	return true;
  }