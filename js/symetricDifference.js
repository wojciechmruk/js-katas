/*

Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets
 is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). 
 For every additional symmetric difference you take (say on a set D = {2, 3}), 
 you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

*/

function sym(args) {
	var arg_array = Array.prototype.slice.call(arguments); 
	var result = [];

	arg_array.forEach( function(argument, index) {
		argument = Array.from(new Set(argument));
		result = result.filter(function(element){
			var index = argument.indexOf(element);
			if ( index < 0) return true;
						
			 argument.splice(index,1);
			 return false;
			
		}).concat(argument);
	});

	return result.sort();  
}

//console.log(sym([1,2,3,4,5])); // expected [1,2,3,4,5]
// console.log(sym([1, 2, 3], [1, 3, 4])); // [2, 4,]
  // console.log(sym([1, 2, 3], [5, 2, 1, 4])); // [3, 4, 5]
 console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); // [1,4,5]
 //console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])); //should return [2, 3, 4, 6, 7]

