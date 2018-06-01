/*

Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

*/


function smallestCommons(arr) {
	arr = arr.sort();
	var smallest = (arr[1]-1)*arr[1]-1;
	var run = 1;
	while (run) {
		smallest ++;
		run = false;
		for (var i = arr[0]; i<=arr[1]; i++){
			if (smallest % i) {
				run = true;
			}		
		}
	}
  return smallest;
}


console.log(smallestCommons([1,13]));