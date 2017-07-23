'use strict';

function average_to_letter(collection) {
	let letter="abcdefghijklmnopqrstuvwxyz";
	let num = Math.ceil(collection.reduce(function(total,num){
		return total+num;
	})/collection.length);
	let c='';
	while(num!=0){
		let d=letter[(num-1)%26];
        if(d==0){
          	num++;
        }
        c=d+c;
        num=Math.floor((num-1)/26);
	}
	return c;
}

module.exports = average_to_letter;

