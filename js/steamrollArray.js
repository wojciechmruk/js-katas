/*

Flatten a nested array. You must account for varying levels of nesting.

*/

function steamrollArray(arr) {
  var new_array = [];
  arr.forEach( function(element, index) {
  	if (Array.isArray(element)){
  		new_array = new_array.concat(steamrollArray(element));
  	}else{
  		new_array.push(element);
  	}
  });
  return new_array;
}

console.log(steamrollArray([1, 2,[3,4],[5,[6]]]));

/*

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].


*/