'use strict';
var map_to_four_multiples_add_one = function(collection){
	return collection.map(function(num){
  		return 4*num+1;
  	});
};

module.exports = map_to_four_multiples_add_one;
