'use strict';

function grouping_count(collection) {
	let num = new Array;
	for(let i in collection){
		if(num[collection[i]]==null){
			num[collection[i]]=1;
		}else{
			num[collection[i]]++;
		}
	}
	return num;
}

module.exports = grouping_count;
