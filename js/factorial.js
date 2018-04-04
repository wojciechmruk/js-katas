/*
 Rules
 num >=0
 0 && 1 = 1
 2 = 1*2 = 2
 5 = 1*2*3*4*5 = 120
*/

function recursive_factorial(num) {
	if (num < 0){
		return false;
	}

	if (num < 2){
		return 1;
	}

  return num * recursive_factorial(num-1);
}

function normal_factorial(num) {
	if (num < 0){
		return false;
	}
	var result = 1;
	for (var i = 1; i <=num ; i++){
		result *= i;
	}

  return result;
}

console.log(recursive_factorial(-1));
console.log(recursive_factorial(0));
console.log(recursive_factorial(1));
console.log(recursive_factorial(2));
console.log(recursive_factorial(5));

console.log(normal_factorial(-1));
console.log(normal_factorial(0));
console.log(normal_factorial(1));
console.log(normal_factorial(2));
console.log(normal_factorial(5));
