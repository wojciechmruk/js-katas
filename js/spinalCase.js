/*

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

*/


function spinalCase(str) {
 return str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()
  	.replace(/[^a-z]/g, '-');
}

console.log(spinalCase('ThisIs Spinal Tap'));