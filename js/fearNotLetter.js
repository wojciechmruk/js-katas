/*

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

*/


function fearNotLetter(str) {
  var str_arr = str.split('');
    for (var i = 1; i<str_arr.length; i++){
    if (str_arr[i-1].charCodeAt() != str_arr[i].charCodeAt()-1){
      return String.fromCharCode((str_arr[i-1].charCodeAt()+1));
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));