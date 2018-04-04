/*
  Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
*/

function titleCase1(str) {
  var str_array = str.split(' ');

  for (var i =0; i < str_array.length; i++){
    str_array[i] = str_array[i].charAt(0).toUpperCase() + str_array[i].slice(1).toLowerCase();
  }

  return str_array.join(' ');
}

console.log(titleCase1("I'm a little tea pot"));

// Method 2
function titleCase2(str) {
  var str_array = str.split(' ');

  var result = str_array.map(function(word){
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
  
    return result.join(' ');
}

console.log(titleCase2("I'm a little tea pot"));