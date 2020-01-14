const Budget = require('./classes/Budget.js')
const SubBudget = require('./classes/subBudget.js')

let newBudget = new Budget(3000);
newBudget.addCost('rent', 250, false);
newBudget.addCost('food', 200, true);
console.log(newBudget)
console.log("The remaining budget is ",newBudget.calculateRemaining())

