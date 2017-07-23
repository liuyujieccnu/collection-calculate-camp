'use strict';

function hybrid_operation_to_uneven(collection) {
	let res = new Array;
	for(let i in collection){
		if(collection[i]%2!=0){
			res.push(collection[i]);
		}
	}
	return res.map(function(num){
		return num*3+5;
	}).reduce(function(total,num){
		return total+num;
	});
}

module.exports = hybrid_operation_to_uneven;

