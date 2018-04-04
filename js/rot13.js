/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/


function rot13(str) { // LBH QVQ VG!
	var new_str='';
	for (var i = 0; i<str.length; i++){
		var letter = str[i]; 
		var letter_code = letter.charCodeAt(str[i]);
		
		if (letter_code >= 65 && letter_code <= 90)
		{
			letter_code = letter_code + 13 > 90 ? letter_code + 13 - 26 : letter_code + 13;
		}
		new_str +=String.fromCharCode(letter_code);

	}

  return new_str;
}


console.log(rot13("LBH QVQ VG!"));