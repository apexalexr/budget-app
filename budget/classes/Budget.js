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
    }

    addCost (descr, amount, isCat) {
        let temp  = new Cost(descr, amount, isCat)
        this.costs.push(temp)
    }

    addSub(descr, allocated) {
        let temp = new SubBudget(descr,allocated);
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
        this.subBudgets[position].addUse(descr,amount)
    }

    deleteSubBudgetUse(subDescr,descrPosition) {
        let subPosition = this.subBudgets.findIndex(element => element.descr === subDescr)
        this.subBudgets[subPosition].splice(descrPosition,1)
    }
}

class Cost {
    constructor(descr, amount) {
        this.descr = descr
        this.amount = amount
    }
}

class SubBudget {
    constructor (descr,allocated) {
        this.descr = descr;
        this.allocated = allocated;
        this.usage = [];
        this.remaining = allocated;
    }

    addUse(descr, amount) {
        this.usage.push({descr,amount});
        this.remaining -= amount;
    }

    getAllocated () {
        return this.allocated
    }

    getDescr() {
        return this.descr
    }
}

module.exports = Budget