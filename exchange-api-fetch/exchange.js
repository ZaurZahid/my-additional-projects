class Currency {
    constructor(firstCur, secondCur) {
        this.firstCur = firstCur,
            this.secondCur = secondCur,
            this.url = "https://api.exchangeratesapi.io/latest?base=",
            this.amount = null
    }
    findExch() {
        return new Promise((resolve, reject) => {

            fetch(this.url + this.firstCur)
                .then(response => response.json())
                .then(data => {
                    const currentMoney = data.rates[this.secondCur]
                    const amount2 = Number(this.amount)
                    const total = currentMoney * amount2
                    resolve(total);
                })
                .catch(err => reject(err))
        })
    }
    changeAmount(amount) {
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCur) {
        this.firstCur = newFirstCur;
    }
    changeSecondCurrency(newSecondCur) {
        this.secondCur = newSecondCur;
    }
}