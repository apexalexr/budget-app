const {SubBudget} = require('./SubBudget')
const {Cost} = require('./Cost')

class Budget {
    constructor(income, month, year) {
        if(!income||!month||!year) {
            throw new Error('Please fill in all the details')
        }
        this.month = month;
        this.year = year;
        this.income = income;
        this.costs = [];
        this.subBudgets = [];
        this.remaining = income;
    }

    addCost (descr, amount) {
        let temp  = new Cost(descr, amount)
        this.costs.push(temp)
        this.updateRemaining(amount)
    }

    addSub(descr, allocated) {
        let temp = new SubBudget(descr,allocated);
        this.subBudgets.push(temp)
        this.updateRemaining(allocated)
    }

    updateRemaining(amount) {
        this.remaining -= amount
    }

    addSubBudgetUse(subDescr, descr, amount) {
        let position = this.subBudgets.findIndex(element => element.descr === subDescr)
        this.subBudgets[position].addUse(descr,amount)
    }

    // deleteSubBudgetUse(subDescr,descrPosition) {
    //     let subPosition = this.subBudgets.findIndex(element => element.descr === subDescr)
    //     this.subBudgets[subPosition].splice(descrPosition,1)
    // }
}





module.exports = Budget