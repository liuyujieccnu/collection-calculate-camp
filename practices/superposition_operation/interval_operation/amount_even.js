'use strict';

function amount_even(collection) {
	let sum=0;
	for(let i in collection){
		if(collection[i]%2==0){
			sum=sum+collection[i];
		}
	}
	return sum;
}

module.exports = amount_even;
