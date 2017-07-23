'use strict';
var is_exist_element = function(collection,element){
	let res = new Array;
	for(let i in collection){
		if(collection[i]%2==0){
			res.push(collection[i]);
		}
	}
	if(res.indexOf(element)!=-1)
		return false;
	else
		return true;
};
module.exports = is_exist_element;
