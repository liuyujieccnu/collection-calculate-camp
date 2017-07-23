'use strict';

function even_to_letter(collection) {
	let letter="abcdefghijklmnopqrstuvwxyz";
	let res = new Array;
	for(let i in collection){
		if(collection[i]%2==0){
			let num = collection[i];
			let c='';
			while(num!=0){
				let d=letter[(num-1)%26];
        		if(d==0){
          			num++;
        		}
        		c=d+c;
        		num=Math.floor((num-1)/26);
			}
			res.push(c);
		}
	}
	return res;
}

module.exports = even_to_letter;
