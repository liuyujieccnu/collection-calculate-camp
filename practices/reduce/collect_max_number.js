'use strict';

function collect_max_number(collection) {
	return collection.sort(function(a,b){
		return b-a;
	})[0];
}

module.exports = collect_max_number;
