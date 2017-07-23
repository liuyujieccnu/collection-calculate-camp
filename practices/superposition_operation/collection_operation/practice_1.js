'use strict';

function hybrid_operation(collection) {
	return collection.map(function(num){
		return num*3+2;
	}).reduce(function(total,num){
		return total+num;
	});
}

module.exports = hybrid_operation;

