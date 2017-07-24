'use strict';
var single_element = function(collection){
	let res = new Array;
	for(let i in collection){
		if(i%2!=0){
			res.push(collection[i]);
		}
	}
	
	let con = new Array;
	let flag = new Array;
	for(let i=0;i<res.length;i++){
		for(let j=0;j<i;j++){
			if(res[i]==res[j]){
				flag.push(i);
				flag.push(j);
			}
		}
	}
	for(let i=0;i<res.length;i++){
		if(flag.indexOf(i)==-1)
			con.push(res[i]);
	}
	return con;
};
module.exports = single_element;
