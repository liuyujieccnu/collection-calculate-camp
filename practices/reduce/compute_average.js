'use strict';

function compute_average(collection) {
	return collection.reduce(function(total,num){
		return total+num;
	})/collection.length;
}

module.exports = compute_average;

