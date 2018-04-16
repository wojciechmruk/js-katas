/*

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

*/



function sumPrimes(num) {
	if (num == 1 || num == 3) return num;
	
	var sum = 1;

	for (var i = 1; i <=num; i++){
		sum += (i%2 || i % 3) ? 0 : i;
	}

  return num;
}

console.log(sumPrimes(10)); //should return 17.

console.log(sumPrimes(977)); //should return 73156.
