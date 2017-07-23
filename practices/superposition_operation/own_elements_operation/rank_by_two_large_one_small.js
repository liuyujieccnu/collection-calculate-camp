'use strict';
function rank_by_two_large_one_small(collection){
	let sorted = collection.sort(function(a,b){
		return a-b;
	});
	let small = new Array;
	let big = new Array;
	let result = new Array;
	let m=0;
	let n=0;
	for(let i in sorted){
		if(i%3==0){
			small.push(sorted[i]);
		}else{
			big.push(sorted[i]);
		}
	}
	for(let i in sorted){
		if((i+1)%3==0){
			result.push(small[n]);
			n++;
		}else{
			result.push(big[m]);
			m++;
		}
	}
	if(sorted.length%3==1){
		result[sorted.length-1]=small[n];
	}
	if(sorted.length%3==2){
		result[sorted.length-2]=small[small.length-1];
		result[sorted.length-1]=big[big.length-1];
	}
	return result;
}
module.exports = rank_by_two_large_one_small;
