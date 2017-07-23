'use strict';

function get_letter_interval(number_a, number_b) {
		let letter="abcdefghijklmnopqrstuvwxyz"
	let result=[];
  	if(number_a<number_b){
    	for(let i=number_a;i<=number_b;i++){
    		let flag=Math.floor((i-1)/26)-1;
    		if(i<=26)
     	 		result.push(letter[i-1]);
     	 	else{
     	 		if(i%26==0){
     	 			result.push(letter[flag]+letter[25]);
     	 		}else
     	 			result.push(letter[flag]+letter[(i%26)-1]);
     	 	}
    	}
  	}else{
    	for(let i=number_a;i>=number_b;i--){
      		let flag=Math.floor((i-1)/26)-1;
    		if(i<=26)
     	 		result.push(letter[i-1]);
     	 	else{
     	 		if(i%26==0){
     	 			result.push(letter[flag]+letter[25]);
     	 		}else
     	 			result.push(letter[flag]+letter[(i%26)-1]);
     	 	}
    	}
  	}
  	return result;
}

module.exports = get_letter_interval;
