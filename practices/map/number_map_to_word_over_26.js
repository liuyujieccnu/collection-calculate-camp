'use strict';
var number_map_to_word_over_26 = function(collection){
	let letter="abcdefghijklmnopqrstuvwxyz";
	return collection.map(function(num){
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
  	});
};

module.exports = number_map_to_word_over_26;
