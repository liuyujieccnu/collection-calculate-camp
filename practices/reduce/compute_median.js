'use strict';

function compute_median(collection) {
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

module.exports = compute_median;


