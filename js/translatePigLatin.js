/*

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/


function translatePigLatin(str) {
  var str_array = str.split('');
  var vowels = ['a','e','i','o','u'];

  if (vowels.indexOf(str[0].toLowerCase()) >= 0) {
    return str+'way';
  }

  for (var i = 0; i<str_array.length; i++){
    var first_letter = str[0];
    str = str.slice(1,str.length)+first_letter;

    if (vowels.indexOf(str[0].toLowerCase()) >= 0) {
      return str+'ay';
    }
  }

  return str+'ay';
}

console.log(translatePigLatin("consonant"));