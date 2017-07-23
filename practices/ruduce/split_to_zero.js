'use strict';

function spilt_to_zero(number, interval) {
	let result = new Array;
	result.push(number);
	while(number>0){
		result.push(Number((number-interval).toFixed(1)));
		number=Number((number-interval).toFixed(1));
	}
	return result;
}

module.exports = spilt_to_zero;
