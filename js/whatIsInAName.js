/*


Make a function that looks through an array of objects (first argument) and returns an array of all objects 
that have matching property and value pairs (second argument). 
Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is 
[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object
 from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
 should return [{ first: "Tybalt", last: "Capulet" }]

*/


function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  var source_keys = Object.keys(source);
  for (var i = 0 ; i< collection.length;i++){
  	var valid = true;
  	source_keys.forEach( function(element, index) {
  			if (!collection[i].hasOwnProperty(element) || collection[i][element] !== source[element]){
	  			valid = false;
  			}
  		});

  	if (valid){
  		arr.push(collection[i]);
  	}
  }
  
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], {last: "Montague" }));

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }], {last: "Montague" }));