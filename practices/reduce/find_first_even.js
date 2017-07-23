'use strict';

function find_first_even(collection) {
	for(let i=0;i<collection.length;i++){
		if(collection[i]%2==0){
			return collection[i];
			break;
		}
	}
}

module.exports = find_first_even;

