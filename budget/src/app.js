const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://budget:budget@cluster0-6sw4j.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log(client.isConnected())
  console.log(err)
  // perform actions on the collection object
  client.close();
});

const Budget = require('../classes/Budget.js')
const mongodb = require('mongodb')
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
} catch (error) {
  console.log(error.message)
}

let newBudget = new Budget(3000,1,2020)
newBudget.addCost('rent', 250);
newBudget.addSub('food', 200);
newBudget.addSub('range',100)
newBudget.addSubBudgetUse('food', 'Seiwa', 5)
newBudget.addSubBudgetUse('food', 'Seid', 5)
console.log(newBudget)
console.log("The remaining budget is ",newBudget.calculateRemaining())
console.log(newBudget.subBudgets[0].usage)

console.log(newBudget)


app.get('/', function (req, res) {
  res.render('budget', {
    subBudgets : newBudget.subBudgets
  })
})
   
app.listen(3000)