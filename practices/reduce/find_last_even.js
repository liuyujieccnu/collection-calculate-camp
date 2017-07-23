'use strict';

function find_last_even(collection) {
	collection.reverse();
	for(var i=0;i<collection.length;i++){
		if(collection[i]%2==0){
			break;
		}
	}
	return collection.length-1-i;
}

module.exports = find_last_even;
