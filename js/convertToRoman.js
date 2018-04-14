/*

Convert the given number into a roman numeral.

From 1 to 3999

*/

function convertToRoman(num) {
 var roman_number = '';
 var num_array;
 var roman_map = {
 	1: 'I',	2:'II',	3:'III',4:'IV', 5:'V',6:'VI',7:'VII',8:'VIII',9:'IX',
 	10:'X', 20:'XX',30:'XXX',40:'XL',50:'L',60:'LX',70:'LXX',80:'LXXX',90:'XC',
 	100:'C',200:'CC',300:'CCC', 400:'CD', 500:'D',600:'DC',700:'DCC',800:'DCCC',900:'CM',
 	1000:'M',2000:'MM',3000:'MMM'
};
	num_array = num.toString().split('');
	num_array.reverse();

	for (var i =0; i<num_array.length; i++){
		var digit = Math.pow(10, i);
		if (num_array[i] && num_array[i] > 0){
			roman_number = roman_map[num_array[i]*digit] + roman_number;
		}	
	}
  return roman_number;
}


console.log(convertToRoman(1) + ' should return "I".');
console.log(convertToRoman(2) + ' should return "II".');
console.log(convertToRoman(3) + ' should return "III".');
console.log(convertToRoman(4) + ' should return "IV".');
console.log(convertToRoman(5) + ' should return "V".');
console.log(convertToRoman(9) + ' should return "IX".');
console.log(convertToRoman(10) + ' should return "X".');
console.log(convertToRoman(12) + ' should return "XII".');
console.log(convertToRoman(16)  + ' should return "XVI".');
console.log(convertToRoman(29) + ' should return "XXIX".');
console.log(convertToRoman(44) + ' should return "XLIV".');
console.log(convertToRoman(45) + ' should return "XLV"');
console.log(convertToRoman(68) + ' should return "LXVIII"');
console.log(convertToRoman(83) + ' should return "LXXXIII"');
console.log(convertToRoman(97) + ' should return "XCVII"');
console.log(convertToRoman(99) + ' should return "XCIX"');
console.log(convertToRoman(100) + ' should return "C"');
console.log(convertToRoman(500) + ' should return "D"');
console.log(convertToRoman(501) + ' should return "DI"');
console.log(convertToRoman(649) + ' should return "DCXLIX"');
console.log(convertToRoman(798) + ' should return "DCCXCVIII"');
console.log(convertToRoman(891) + ' should return "DCCCXCI"');
console.log(convertToRoman(1000) + ' should return "M"');
console.log(convertToRoman(1004) + ' should return "MIV"');
console.log(convertToRoman(1006) + ' should return "MVI"');
console.log(convertToRoman(1023) + ' should return "MXXIII"');
console.log(convertToRoman(2014) + ' should return "MMXIV"');
console.log(convertToRoman(3999) + ' should return "MMMCMXCIX"');

console.log('   ---------- Method 2')
// Method 2

function convertToRoman2(num) {
 var roman_number = '';
 var digit = [1000,900,500,400,100,90,50,     40,  10, 9,   5,  4,   1];
 var  romen = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

 	for (var i = 0; i<digit.length; i++){
 		while (num>=digit[i]){
 			roman_number +=romen[i];
 			num-=digit[i];
 		}
 	}

  return roman_number;
}


console.log(convertToRoman2(1) + ' should return "I".');
console.log(convertToRoman2(2) + ' should return "II".');
console.log(convertToRoman2(3) + ' should return "III".');
console.log(convertToRoman2(4) + ' should return "IV".');
console.log(convertToRoman2(5) + ' should return "V".');
console.log(convertToRoman2(6) + ' should return "VI".');
console.log(convertToRoman2(9) + ' should return "IX".');
console.log(convertToRoman2(10) + ' should return "X".');
console.log(convertToRoman2(12) + ' should return "XII".');
console.log(convertToRoman2(16)  + ' should return "XVI".');
console.log(convertToRoman2(29) + ' should return "XXIX".');
console.log(convertToRoman2(44) + ' should return "XLIV".');
console.log(convertToRoman2(45) + ' should return "XLV"');
console.log(convertToRoman2(68) + ' should return "LXVIII"');
console.log(convertToRoman2(83) + ' should return "LXXXIII"');
console.log(convertToRoman2(97) + ' should return "XCVII"');
console.log(convertToRoman2(99) + ' should return "XCIX"');
console.log(convertToRoman2(100) + ' should return "C"');
console.log(convertToRoman2(500) + ' should return "D"');
console.log(convertToRoman2(501) + ' should return "DI"');
console.log(convertToRoman2(649) + ' should return "DCXLIX"');
console.log(convertToRoman2(798) + ' should return "DCCXCVIII"');
console.log(convertToRoman2(891) + ' should return "DCCCXCI"');
console.log(convertToRoman2(1000) + ' should return "M"');
console.log(convertToRoman2(1004) + ' should return "MIV"');
console.log(convertToRoman2(1006) + ' should return "MVI"');
console.log(convertToRoman2(1023) + ' should return "MXXIII"');
console.log(convertToRoman2(2014) + ' should return "MMXIV"');
console.log(convertToRoman(3999) + ' should return "MMMCMXCIX"');