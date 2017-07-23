'use strict';

function compare_collections(collection_a, collection_b) {
	if(collection_a.length===collection_b.length){
		for(let i=0;i<collection_a.length;i++){
			if(collection_a.pop()!=collection_b.pop()){
				return false;
				break;
			}else
				return true;
		}

	}else
		return false;
}

module.exports = compare_collections;


