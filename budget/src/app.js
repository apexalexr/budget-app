const Budget = require('../classes/Budget.js')
const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')


app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

let newBudget = new Budget(3000);
newBudget.addCost('rent', 250, false);
newBudget.addCost('food', 200, true);
newBudget.addSubBudgetUse('food', 'Seiwa', 5)
newBudget.addSubBudgetUse('food', 'Seid', 5)
console.log(newBudget)
console.log("The remaining budget is ",newBudget.calculateRemaining())
let {descr, allocated,uses,remaining} = newBudget.subBudgets[0]
console.log(newBudget.subBudgets[0].uses)


app.get('/', function (req, res) {
    res.render('budget', {
      // subDescr: newBudget.subBudgets[0].descr,
      // subUseDescr: newBudget.subBudgets[0],
      // subUseCost: newBudget.subBudgets[0],
      // subAllocated: newBudget.subBudgets[0].allocated,
      // subRemaining: newBudget.subBudgets[0].remaining
      subBudgets : newBudget.subBudgets
    })
  })
   
app.listen(3000)



