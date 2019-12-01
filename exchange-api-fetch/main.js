let amount = document.querySelector('#amount');
let firstSelect = document.querySelector('#firstCurrency');
let secondSelect = document.querySelector('#secondCurrency');

eventListeners()
    /* add classes */
const currency = new Currency('USD', 'TRY')
const ui = new UI(firstSelect, secondSelect)

function eventListeners() {
    amount.addEventListener('input', exchangeCurrency);
    firstSelect.onchange = function() {
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent)
        ui.changeFirst()
    }
    secondSelect.onchange = function() {
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent)
        ui.changeSecond()

    }
}

function exchangeCurrency() {
    currency.changeAmount(amount.value)

    currency.findExch()
        .then(answer => ui.displayResult(answer))
        .catch(error => console.error(error));
}