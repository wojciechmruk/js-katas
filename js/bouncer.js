/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  var forbidden = [false, null, 0, "", undefined, NaN];
  var new_arr = [];

  for(i in arr){
  	if (!forbidden.includes(arr[i])){
  		new_arr.push(arr[i]);
  	}
  }
  return new_arr;
}

console.log(bouncer([7, "ate", "", false, 9]));



function bouncer2(arr) {
 	return new_arr = arr.filter(function check(word){
		return Boolean(word);
	})
}



console.log(bouncer2([7, "ate", "", false, 9]));


