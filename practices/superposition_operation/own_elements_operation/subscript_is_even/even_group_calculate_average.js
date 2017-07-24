'use strict';
var even_group_calculate_average = function(collection){
	let res0 = new Array;
	let res1 = new Array;
	let res2 = new Array;
	let digits = new Array;
	for(let i=0;i<collection.length;i++){
		if(i%2!=0){
			res0.push(collection[i]);
		}
	}
	for(let i=0;i<res0.length;i++){
		if(res0[i]%2==0){
			res1.push(res0[i]);
		}
	}
	if(res1.length==0){
		res2.push(0);
	}
	for(let i=0;i<res1.length;i++){
		let count=0;
		let flag=res1[i];
    	while(flag){
        	flag=Math.floor(flag/10);
        	count++;
    	}
    	if(typeof(digits[count])!='object')
    		digits[count] = new Array;
    	digits[count].push(res1[i]);
	}
	for(let i=0;i<digits.length;i++){
		if(digits[i]!=undefined){
			res2.push(digits[i].reduce(function(total,num){
				return total+num;
			})/digits[i].length);
		}
	}
	return res2;
};
module.exports = even_group_calculate_average;
