'use strict';
var map_to_three_multiples = function(collections){
	return collections.map(function(num){
  		return 3*num;
  	});
};

module.exports = map_to_three_multiples;
