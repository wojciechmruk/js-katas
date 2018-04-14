/*

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

*/

function sumAll(arr) {
	var start = arr[0];
	var end = arr[1];

	if (start > end){
		start = arr[1];
		end = arr[0];
	}

	var result = 0;
	for (var i = start; i <= end; i++){
		result += i;
	}
	
  return result;
}

console.log(sumAll([1, 4]));

// version 2

function sumAll2(arr) {
	var result = 0;
	for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
		result += i;
	}
	
  return result;
}

console.log(sumAll2([1, 4]));
