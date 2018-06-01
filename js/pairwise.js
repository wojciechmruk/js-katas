/*
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6
*/

function pairwise(arr, arg) {
	var result = 0;
	arr.reduce(function(prev, current){}
		
		, 0)
	for (var i = 0; i<arr.length-1; i++){
		if (arr[i] === false) continue;
		for (var j = i+1; j<arr.length; j++){
			if (arr[j] !== false && arr[i] + arr[j] === arg){
				result += i+j;
				arr[j] = false;
				break;
			}
		}
	}
  return result;
}

pairwise([1, 3, 2, 4], 4);
/*

pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.
pairwise([1, 3, 2, 4], 4) should return 1.
pairwise([1, 1, 1], 2) should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.
pairwise([], 100) should return 0.

*/