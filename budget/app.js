const Budget = require('./classes/Budget.js')
const SubBudget = require('./classes/subBudget.js')

// incomeCosts.updateIncome(100)

// console.log(incomeCosts.iC)

// incomeCosts.addCost('Range', 201.29)

// let newSub = new SubBudget('Food',200)
// let nextSub = new SubBudget('not',500)
// newSub.addUse('Seiwa',100)
// nextSub.addUse('books', 50)
// console.log(newSub,nextSub)

let newBudget = new Budget(3000);
newBudget.addCost('rent', 250, false);
newBudget.addCost('food', 200, true);
console.log(newBudget)
console.log(newBudget.calculateRemaining())