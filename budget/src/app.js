const Budget = require('../schema/schema.js')
// const Budget = require('../classes/Budget.js')
const express = require('express')
const hbs = require('hbs')
const path = require('path')
const mongoose = require('mongoose')
const app = express()

//Path Definitions
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//Connect to MongoClient Budget cluster

console.log(Budget)
const uri = "mongodb+srv://budget:budget@cluster0-6sw4j.mongodb.net/test?retryWrites=true&w=majority";



mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  let tempBudget = new Budget({
    month : 1,
    income : 3000})
  tempBudget.getIncome()
  tempBudget.save()
  // Budget.find((err,budget) => {
  //   if(err) return console.error(err);
  //   console.log(budget)
  // })
})


app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

// app.get('/', function (req, res) {
//   res.render('budget', {
//     subBudgets : newBudget.subBudgets
//   })
// })

app.post('/addBudget', function(req,res) {
  console.log(req.body)
  res.status(200).send('Success!')
})
   
app.listen(3000)