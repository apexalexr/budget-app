const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BudgetSchema = new Schema({
    id : ObjectId,
    month : {type: Number, min: 1, max: 12},
    year : {type: Number},
    income : Number,
    costs : [],
    sub_budgets : []
})

module.exports = BudgetSchema
