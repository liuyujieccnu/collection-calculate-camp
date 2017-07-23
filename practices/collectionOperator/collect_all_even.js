'use strict';

function collect_all_even(collection) {
	return collection.filter(function(num){
		if(num%2==0){
			return num;
		}
	});
}

module.exports = collect_all_even;
