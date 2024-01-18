/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


function calculateTotalSpentByCategory(transactions) {
    const catPrice = {};
    for (let i = 0; i < transactions.length; i++) {
      const element = transactions[i];
      catPrice[element["category"]] == null ? catPrice[element["category"]] = element["price"] : catPrice[element["category"]] += element["price"];
    }
  
    const ans = [];
    for (const key in catPrice) {
      const element = catPrice[key];
      ans.push({ category: key, totalSpent: element });
    }
  
    return ans;
  }
  


module.exports = calculateTotalSpentByCategory;
