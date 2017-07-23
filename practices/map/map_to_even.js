'use strict';
function map_to_even(collection){
  	return collection.map(function(num){
  		return 2*num;
  	});
}
module.exports = map_to_even;
