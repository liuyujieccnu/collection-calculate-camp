'use strict';
var calculate_average = function(collection){
	let res = new Array;
	for(let i in collection){
		if(collection[i]%2==0){
			res.push(collection[i]);
		}
	}
	return res.reduce(function(total,num){
		return total+num;
	})/res.length;
};
module.exports = calculate_average;
