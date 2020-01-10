class SubBudget {
    constructor (descr,allocated) {
        this.descr = descr;
        this.allocated = allocated;
        this.uses = [];
        this.remaining = allocated;
    }

    addUse(descr, amount) {
        this.uses.push({descr,amount});
        this.remaining -= amount;
    }

    getAllocated () {
        return this.allocated
    }

    getDescr() {
        return this.descr
    }
}

module.exports = SubBudget