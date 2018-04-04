// Return the length of the longest word in the provided sentence

function findLongestWord(str) {
  var str_array = str.split(" ");
  if (str_array.length <2){
  	return str.length;
  }

  var index = 0;
  for (var i=1; i < str_array.length; i++){
  	if (str_array[i].length > str_array[index].length){
  		index = i;
  	}
  }

  return str_array[index].length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));