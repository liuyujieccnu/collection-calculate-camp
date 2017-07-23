'use strict';

function get_intersection(collection_a, collection_b) {
	let result = new Array;
	for(let i in collection_b){
		if(collection_a.indexOf(collection_b[i])!=-1){
			result.push(collection_b[i]);
		}
	}
	return result;
}

module.exports = get_intersection;
