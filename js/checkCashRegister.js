/*

Exact Change
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.
*/

  function checkCashRegister(price, cash, cid) {
	var dictionary = {'ONE HUNDRED' : 10000, 'TWENTY' : 2000, 'TEN': 1000, 'FIVE': 500, 'ONE': 100, 'QUARTER': 25, 'DIME': 10, 'NICKEL': 5, 'PENNY': 1};
	var cid_obj = {'ONE HUNDRED' : 0, 'TWENTY' : 0, 'TEN': 0, 'FIVE': 0, 'ONE': 0, 'QUARTER': 0, 'DIME': 0, 'NICKEL': 0, 'PENNY': 0};
	price *=100;
	cash *=100;
	cid.forEach( function(element, index) {cid_obj[element[0]] = element[1]* 100;});

	var result_obj = {'ONE HUNDRED' : 0, 'TWENTY' : 0, 'TEN': 0, 'FIVE': 0, 'ONE': 0, 'QUARTER': 0, 'DIME': 0, 'NICKEL': 0, 'PENNY': 0};
	var remains_cid = 0;
	var result = [];
	var change = 0;
	for (var key in dictionary){
			remains_cid += cid_obj[key];
			while ((price + change + dictionary[key]) <= cash){
				if (cid_obj[key] <= 0){break;}
              
				cid_obj[key] -= dictionary[key]; // take from the drower
				change += dictionary[key]; // add to the change 
				remains_cid -=dictionary[key]; // remove from cid
				result_obj[key] +=dictionary[key]; // create result object
			}
			if (result_obj[key] > 0){
				result.push([key, result_obj[key] / 100]);
			}
	}
	if ((price + change) < cash){return 'Insufficient Funds'}
	if (remains_cid === 0){return 'Closed'}

	return result
 }

// console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));


/*
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return an array.
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["QUARTER", 0.50]].
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Closed".

*/

