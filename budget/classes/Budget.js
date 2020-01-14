let SubBudget = require('./subBudget.js')

class Budget {
    constructor(income, month, year) {
        this.month = month;
        this.year = year;
        this.income = income;
        this.costs = [];
        this.subBudgets = [];
    }

    addCost (descr, amount, isCat) {
        let temp  = new Cost(descr, amount, isCat)
        if(isCat) {
            this.subBudgets.push(temp)
        } else {
            this.costs.push(temp)
        }
    }

    addSub(sub) {
        let temp = sub;
        this.subBudgets.push(temp)
    }

    calculateRemaining() {
        let totalCosts = 0;
        this.costs.forEach(element => {
            totalCosts += element.amount
        })
        let totalSubBudgets = 0;
        this.subBudgets.forEach(element => {
            totalSubBudgets += element.allocated
        })
        return this.income-totalCosts-totalSubBudgets
    }

    addSubBudgetUse(subDescr, descr, amount) {
        let position = this.subBudgets.findIndex(element => element.descr === subDescr)
        this.subBudgets[position].uses.push(descr,amount)
    }
}

class Cost {
    constructor(descr, amount, isCat) {
        this.descr = descr
        this.amount = amount
        this.isCat = isCat
        if(isCat) {
            let temp = new SubBudget(descr, amount);
            return temp
        }
    }
}

module.exports = Budget