'use strict';

function choose_multiples_of_three(collection) {
	let result=new Array;
  	for(let i=0;i<collection.length;i++){
    	if(collection[i]%3==0){
      		result.push(collection[i]);
    	}
  	}
  	return result;
}

module.exports = choose_multiples_of_three;
