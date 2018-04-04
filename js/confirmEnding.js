/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
*/
function confirmEnding(str, target) {
  var regex = new RegExp( target+'$', 'g' );
  return str.match(regex) == null ? false : true;
}

console.log(confirmEnding("Bastian", "ti"));