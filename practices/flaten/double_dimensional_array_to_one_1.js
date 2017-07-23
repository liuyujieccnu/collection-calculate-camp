'use strict';

function double_to_one(collection) {
	let result = new Array;
	for(let item in collection){
		if(typeof(collection[item])==='number'){
			result.push(collection[item]);
		}else if(typeof(collection[item])==='object'){
			for(let item1 in collection[item]){
				result.push(collection[item][item1]);
			}
		}
	}
	return result;
}
module.exports = double_to_one;
