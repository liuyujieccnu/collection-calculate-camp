'use strict';

function choose_no_repeat_number(collection) {
	return collection.filter(function(num,index){
		if(index == 0){
			return num;
		}else{
			if(num!=collection[index-1]){
				return num;
			}
		}
	});
}

module.exports = choose_no_repeat_number;
