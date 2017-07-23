'use strict';

function average_uneven(collection) {
	let sum=0;
	let con=0;
	for(let i in collection){
		if(collection[i]%2!=0){
			sum=sum+collection[i];
			con++
		}
	}
	return sum/con;
}

module.exports = average_uneven;
