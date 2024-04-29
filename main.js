const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firtsCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");

const currency = new Currency();

runEventListener();

function runEventListener() {
    amountInput.addEventListener("input", exchange);
}

function exchange() {
    const amount = Number(amountInput.value.trim());
    const firtsOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;
    // console.log(firtsOptionValue, secondOptionValue);

    currency.exchange(amount, firtsOptionValue, secondOptionValue)
     .then((result) => {
         resultInput.value = result;
     })

}