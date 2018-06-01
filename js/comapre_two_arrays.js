/*

Compare two arrays and return a new array with any items
only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.

*/

// Method 1
function diffArray(arr1, arr2) {
  var newArr = [];
  arr1.forEach( function(element, index) {
  	var arr2_element = arr2.indexOf(element);
  	if (arr2_element>=0){
  		arr2.splice(arr2_element, 1);
	}else{
		newArr.push(element);
	}
  });
  
    return newArr.concat(arr2);
}

// console.log(diffArray([1, 2, 3, 5, 6, 'Dante'], [1, 2, 3, 4, 5, 7]));

// Method2

function diffArray2(arr1, arr2) {
	var newArr = [];
	newArr = arr1.filter(function(val){return arr2.indexOf(val) < 0;});
    
    return newArr.concat(arr2.filter(function(val){return arr1.indexOf(val)<0}));
 }

console.log(diffArray2([1, 2, 3, 5, 6, 'Dante'], [1, 2, 3, 4, 5, 7]));