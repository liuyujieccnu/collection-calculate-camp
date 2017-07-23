'use strict';

function choose_no_common_elements(collection_a, collection_b) {
	return collection_a.filter(function(num){
		if(collection_b.indexOf(num)==-1){
			return num;
		}
	});
}

module.exports = choose_no_common_elements;
