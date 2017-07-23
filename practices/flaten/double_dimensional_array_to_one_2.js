'use strict';

function double_to_one(collection) {
	let result = new Array;
	let res = new Array
	for(let item in collection){
		if(typeof(collection[item])==='number'){
			result.push(collection[item]);
		}else if(typeof(collection[item])==='object'){
			for(let item1 in collection[item]){
				result.push(collection[item][item1]);
			}
		}
	}
	for(let j=0;j<result.length;j++){
		for(let i=0;i<j;i++){
			if(result[j]==result[i]){
				result[j] = -1;
			}
		}
	}
	for(let i in result){
		if(result[i]!=-1){
			res.push(result[i]);
		}
	}
	return res;
}

module.exports = double_to_one;
