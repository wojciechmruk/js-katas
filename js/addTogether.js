/*

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

*/


function isNumber(num){
	return typeof num == 'number' ? true: false;
}

function addTogether() {
	if (arguments.length > 1){
		if (!isNumber(arguments[0])) {
			return undefined;
		}
		return arguments[0] + arguments[1];
	}
	
	var a = arguments[0];
	return function(x){return a + x};
}

console.log(addTogether('2',3));

/*
addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether("http://bit.ly/IqT6zt") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.

*/