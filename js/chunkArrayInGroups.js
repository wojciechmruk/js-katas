/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

*/

function chunkArrayInGroups(arr, size) {
	var new_array = [];
	for (var i = 0; i<arr.length; i+=size){
		new_array.push(arr.slice(i,i+size));
	}
  
  return new_array;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 8));

