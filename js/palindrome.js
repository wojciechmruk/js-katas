/*
	Palindrome: a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either forward or reverse direction. 
*/

function palindrome(str) {
	var string1 = str.replace(/[^a-z0-9]/gi,'').toLowerCase();
	var string2 = string1.split('').reverse().join('');
  return string1 == string2;
}

console.log('Should be true');
console.log(palindrome("Amore, Roma"));
console.log(palindrome("Amy, must I jujitsu my ma?"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));

console.log('Should be false');
console.log(palindrome("Amore, Romana"));
console.log(palindrome("Amy, must I jujitsu class my ma?"));