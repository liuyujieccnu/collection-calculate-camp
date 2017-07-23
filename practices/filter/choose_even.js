'use strict';

function choose_even(collection) {
	// let result = collection.filter(function(num){
	// 	if(num%2==0){
	// 		return num;
	// 	}
	// });
	// return result;
	let result=new Array;
  	for(let i=0;i<collection.length;i++){
    	if(collection[i]%2==0){
      		result.push(collection[i]);
    	}
  	}
  	return result;
}

module.exports = choose_even;
