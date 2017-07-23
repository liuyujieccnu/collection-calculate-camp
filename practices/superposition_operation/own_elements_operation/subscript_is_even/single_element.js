'use strict';
var single_element = function(collection){
	let res = new Array;
	for(let i in collection){
		if(collection[i]%2!=0){
			res.push(collection[i]);
		}
	}
	let con = new Array;
	for(let i in res){
		for(let j=0;j<i;j++){
			if(res[i]==res[j]){
				res[i]=-1;
				res[j]=-1;
			}
		}
	}
	for(let i in res){
		if(res[i]!=-1)
			con.push(res[i]);
	}
	return con;
};
module.exports = single_element;
