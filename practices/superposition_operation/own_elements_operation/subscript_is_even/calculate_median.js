'use strict';

function median(collection){
	let res = collection.sort(function(a,b){
		return a-b;
	});
	let len = collection.length;
	if(len%2==0){
		return (res[len/2]+res[len/2-1])/2;
	}else{
		return res[Math.floor(len/2)];
	}
}

var calculate_median = function(collection){
	let res = new Array;
	for(let i in collection){
		if(collection[i]%2==0){
			res.push(collection[i]);
		}
	}
	return median(res);
};
module.exports = calculate_median;
