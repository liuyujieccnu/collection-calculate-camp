'use strict';
var even_asc_odd_desc = function(collection){
	let even = new Array;
	let odd = new Array;
	let result = new Array;
	for(let i in collection){
		if(collection[i]%2==0){
			even.push(collection[i]);
		}else{
			odd.push(collection[i]);
		}
	}
	even.sort(function(a,b){
		return a-b;
	});
	odd.sort(function(a,b){
		return b-a;
	});
	for(let i in even){
		result.push(even[i]);
	}
	for(let i in odd){
		result.push(odd[i]);
	}
	return result;
};
module.exports = even_asc_odd_desc;
