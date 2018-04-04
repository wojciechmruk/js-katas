/*

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.

*/

function destroyer(arr) {
	var remove = [].slice.call(arguments).slice(1);
	var new_array = [];

	for (var i = 0; i<arguments[0].length;i++){
		if (remove.indexOf(arguments[0][i])<0){
			new_array.push(arguments[0][i]);
		}
	}

  return new_array;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));