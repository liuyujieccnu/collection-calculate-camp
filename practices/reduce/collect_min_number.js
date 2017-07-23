'use strict';

function collect_min_number(collection) {
	return collection.sort(function(a,b){
		return a-b;
	})[0];
}

module.exports = collect_min_number;

