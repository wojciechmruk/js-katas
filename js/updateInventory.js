/*

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). 
If an item cannot be found, add the new item and quantity into the inventory array. 
The returned inventory array should be in alphabetical order by item.

*/

function updateInventory(arr1, arr2) {
    arr2.forEach( function(newInv, newInvIndex) {
    	var exists = false;
    	for (var i = 0; i<arr1.length; i++){
    		if (newInv[1] === arr1[i][1]){
    			arr1[i][0] += newInv[0];
    			exists = true;
    			break;
    		}
    	}

    	if (!exists){
    		arr1.push([newInv[0], newInv[1]]);
    	}
    });

    return arr1.sort(function(a,b){
    	if (a[1] > b[1]) return 1;
    	if (a[1] < b[1]) return -1;
    	return 0;
    });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
