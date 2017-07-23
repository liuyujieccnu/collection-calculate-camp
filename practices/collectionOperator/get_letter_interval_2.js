'use strict';

function get_letter_interval_2(number_a, number_b) {
	let letter="abcdefghijklmnopqrstuvwxyz";
	let result=[];
  	if(number_a<number_b){
    	for(let i=number_a;i<=number_b;i++){
      		let c="";
      		let flag=i;
      		while(flag!=0){
        		let d=letter[(flag-1)%26];
        		if(d==0){
          			flag++;
        		}
        		c=d+c;
        		flag=Math.floor((flag-1)/26);
      		}
      		result.push(c);
      	}
  	}else{
    	for(let i=number_a;i>=number_b;i--){
      		let c="";
      		let flag=i;
      		while(flag!=0){
        		let d=letter[(flag-1)%26];
        		if(d==0){
          			flag++;
        		}
        		c=d+c;
        		flag=Math.floor((flag-1)/26);
      		}
      		result.push(c);
    	}
  	}
  	return result;
}

module.exports = get_letter_interval_2;

