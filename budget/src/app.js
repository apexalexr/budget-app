const Budget = require('../schema/schema.js')
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
const uri = "mongodb+srv://budget:budget@cluster0-6sw4j.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log("Connection Open")
})

app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.json())

app.post('/addBudget', (req,res) => {
  let tempBudget = new Budget(req.body)
  tempBudget.save()
  res.status(200).send('Success!')
})

//Cost CRUD methods
app.put('/addCost', (req,res) => {
  Budget.findOne({_id : req.body._id}, (err,budget) => {
    if(err) console.error(err)
    if(budget.addCost(req.body.descr,req.body.amount)) {
      res.status(200).send("Successfully added cost " + req.body.descr + " amount " + req.body.amount + "!")
    } else {
      res.status(404).send("This description has already been used.")
    }
  })
})

app.get('/getCost', (req,res) => {
  Budget.findOne({_id : req.body._id}, (err,budget) => {
    if(err) console.error(err)
    let tempCost = budget.getCost(req.body.descr)
    if(tempCost) {
      console.log("Cost Found :")
      console.log("------------")
      console.log("Descr : " + tempCost.descr)
      console.log("Amount: " + tempCost.amount)
      res.status(200).send({descr:tempCost.descr,amount : tempCost.amount})
    } else {
      res.status(404).send("No cost named " + req.body.descr + " found!")
    }
  })
})

app.delete('/deleteCost', (req,res) => {
  Budget.findOne({_id : req.body._id}, (err,budget) => {
    if(err) console.error(err)
    if(budget.deleteCost(req.body.descr)) {
      res.status(200).send(req.body.descr + " has been deleted.")
    } else {
      res.status(404).send(req.body.descr + " does not exist!")
    }
  })
})

app.put('/updateCost',(req,res) => {
  Budget.findOne({_id : req.body._id}, (err,budget) => {
    if(err) console.error(err)
    if(budget.updateCost(req.body.descr,req.body.amount)) {
      res.status(200).send("Cost " + req.body.descr + " has been updated.")
    } else {
      res.status(404).send("Cost not found")
    } 
  })
})


//SubBudget CRUD Method Endpoints
app.listen(3000)