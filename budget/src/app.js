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


try {
  let newBudget = new Budget(3000,1,2020);
  newBudget.addCost('rent', 250);
  newBudget.addSub('food', 200);
  newBudget.addSub('range',100)
  newBudget.addSubBudgetUse('food', 'Seiwa', 5)
  newBudget.addSubBudgetUse('food', 'Seid', 5)
  console.log(newBudget)
  console.log("The remaining budget is ",newBudget.calculateRemaining())
  // let {descr, allocated,uses,remaining} = newBudget.subBudgets[0]
  console.log(newBudget.subBudgets[0].usage)
} catch (error) {
  console.log(error.message)
}




app.get('/', function (req, res) {
    res.render('budget', {
      subBudgets : newBudget.subBudgets
    })
  })
   
app.listen(3000)