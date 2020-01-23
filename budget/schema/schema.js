const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var budgetSchema = new Schema({
    month : {type: Number, min: 1, max: 12},
    year : {type: Number},
    income : Number,
    costs : [{
      descr : String,
      amount : Number
    }],
    sub_budgets : [{
      descr : String,
      allocated : Number,
      usage : [{
        descr : String,
        amount : Number
      }],
      remaining : Number
    }]
  })
  // Budget Methods
  budgetSchema.methods.getIncome = function() {
    console.log(this.income)
  }
  //Cost Methods
  budgetSchema.methods.addCost = (descr,amount) => {
    this.costs.push({descr,amount})
    console.log("Successfully added cost " + descr + " amount " + amount + "!")
  }


  var Budget = mongoose.model('Budget', budgetSchema)

  module.exports = Budget