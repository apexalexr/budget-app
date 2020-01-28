const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var CostSchema = new Schema({
  descr: {type: String},
  amount : Number
})
var useSchema = new Schema({
  date : Date,
  descr : String,
  amount : Number
})
var SubBudgetSchema = new Schema({
  descr : String,
  allocated : Number,
  usage : [useSchema],
  remaining: Number
})

var budgetSchema = new Schema({
  month : {type: Number, min: 1, max: 12},
  year : {type: Number},
  income : Number,
  costs : [CostSchema],
  sub_budgets : [SubBudgetSchema],
  remaining : Number
})

//Custom Array Searching and Unique Checking
budgetSchema.methods.uniqueCheck = function(array , descr) {
  if(array === "cost") {
    return (this.findIndex(array,descr) == -1)
  } else if(array === "sub") {
    return (this.findIndex(array,descr) == -1)
  }
}

budgetSchema.methods.findIndex = function(array , descr) {
  if(array === "cost") {
    return this.costs.findIndex((element)=> {
      return (element.descr === descr)
    })
  } else if(array === "sub") {
    //change to subs
    return this.sub_budgets.findIndex((element)=> {
      return (element.descr === descr)
    })
  }
}

//Budget CRUD methods
//Going to add some errors to budgets later




//Cost Methods CRUD
budgetSchema.methods.addCost = function(descr,amount) {
  if(!this.uniqueCheck("cost", descr)) {
    return null;
  }
  this.costs.push({descr,amount})
  this.save()
  return true;
}

budgetSchema.methods.getCost = function(descr) {
  let index = this.findIndex("cost",descr)
  if(index == -1) {
    console.log("No cost named " + descr + " found!")
    return null;
  }
  return this.costs[index]
}

budgetSchema.methods.deleteCost = function(descr) {
  let index = this.findIndex("cost",descr)
  if(index == -1) {
    return null
  }
  this.costs.splice(index,1)
  this.save()
  return true
}

budgetSchema.methods.updateCost = function(descr,amount) {
  let index = this.findIndex("cost",descr)
  if(index == -1) {
    return null
  }
  this.costs[index] = {descr,amount}
  this.save()
  return true
}

//SubBudget Methods
budgetSchema.methods.addCost = function(descr,amount) {
  if(!this.uniqueCheck("cost", descr)) {
    return null;
  }
  this.costs.push({descr,amount})
  this.save()
  return true;
}

budgetSchema.methods.getCost = function(descr) {
  let index = this.findIndex("cost",descr)
  if(index == -1) {
    console.log("No cost named " + descr + " found!")
    return null;
  }
  return this.costs[index]
}

budgetSchema.methods.deleteCost = function(descr) {
  let index = this.findIndex("cost",descr)
  if(index == -1) {
    return null
  }
  this.costs.splice(index,1)
  this.save()
  return true
}

budgetSchema.methods.updateCost = function(descr,amount) {
  let index = this.findIndex("cost",descr)
  if(index == -1) {
    return null
  }
  this.costs[index] = {descr,amount}
  this.save()
  return true
}

var Budget = mongoose.model('Budget', budgetSchema)

module.exports = Budget