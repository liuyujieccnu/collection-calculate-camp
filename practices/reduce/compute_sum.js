'use strict';

function calculate_elements_sum(collection) {
	return collection.reduce(function(total,num){
		return total+num;
	})
}

module.exports = calculate_elements_sum;

