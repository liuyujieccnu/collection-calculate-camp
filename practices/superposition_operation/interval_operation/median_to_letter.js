'use strict';
function to_letter(num){
	let letters="abcdefghijklmnopqrstuvwxyz";
  	let c="";
  	while(num!=0){
      let d=letters[(num-1)%26];
      if(d==0){
      num++;
    }
    c=d+c;
    num=Math.floor((num-1)/26);
  }
  return c;
}

function median_to_letter(collection) {
	let res = collection.sort(function(a,b){
		return a-b;
	});
	let len = collection.length;
	let num = 0;
	if(len%2==0){
		num = (res[len/2]+res[len/2-1])/2;
	}else{
		num = res[Math.floor(len/2)];
	}
	return to_letter(Math.ceil(num));
}

module.exports = median_to_letter;
