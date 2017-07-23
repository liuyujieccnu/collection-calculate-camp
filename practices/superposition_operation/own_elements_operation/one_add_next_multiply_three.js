'use strict';
function one_add_next_multiply_three(collection){
	let res = collection.map(function(num,index){
		if(index!=(collection.length-1)){
			return (num+collection[index+1])*3;
		}
	});
	res.pop();
	return res;
}
module.exports = one_add_next_multiply_three;
