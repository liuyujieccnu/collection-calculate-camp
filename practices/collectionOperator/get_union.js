'use strict';

function get_union(collection_a, collection_b) {
	let result = new Array;
	for(let i in collection_a)
		result.push(collection_a[i]);
	for(let i in collection_b){
		if(collection_a.indexOf(collection_b[i])==-1){
			result.push(collection_b[i]);
		}
	}
	return result;
}

module.exports = get_union;

