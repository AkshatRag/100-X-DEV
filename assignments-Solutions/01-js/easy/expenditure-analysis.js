/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotalMap = {};

  transactions.forEach(transaction => {
    const { category, price } = transaction;

    if (!categoryTotalMap[category]) {
      categoryTotalMap[category] = 0;
    }

    categoryTotalMap[category] += price;
  });

  const result = Object.keys(categoryTotalMap).map(category => ({
    category,
    totalSpent: categoryTotalMap[category],
  }));

  return result;
  
}

const transactions = [
  { itemName: 'Item1', category: 'Groceries', price: 50, timestamp: 123456789 },
  { itemName: 'Item2', category: 'Electronics', price: 200, timestamp: 123456790 },
  { itemName: 'Item3', category: 'Groceries', price: 30, timestamp: 123456791 },
  // Add more transactions as needed
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);

module.exports = calculateTotalSpentByCategory;
