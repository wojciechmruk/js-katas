/*
Create array of the largest elements from all sub-arrays
Result should be [10,20,100,1001]
*/

function largestElements(arr) {
  var sub_array = [];

  for (var i in arr){
     sub_array.push(Math.max.apply(Math, arr[i]));
  }

  return sub_array;
}

console.log(largestOfFour([[4, 5, 10, 3], [20, 1, 11, 19], [32, 35, 50, 100], [1000, 1001, 857, 1]]));
