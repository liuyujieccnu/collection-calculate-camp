'use strict';

function compute_chain_median(collection) {
	let res = collection.split("->").sort(function(a,b){
		return a-b;
	});
	let result = new Array;
	for(let i=0;i<res.length;i++){
		result.push(Number(res[i]));
	}
	let len = result.length;
	if(len%2==0){
		return (result[len/2]+result[len/2-1])/2;
	}else{
		return result[Math.floor(len/2)];
	}
}

module.exports = compute_chain_median;
