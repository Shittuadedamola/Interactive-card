let cardNumber = document.getElementById("cardNum");
let cardName = document.getElementById("cardName");
let cardCvv = document.getElementById("cardCvv");
let cardMonth = document.getElementById("cardMonth");
let cardYear = document.getElementById("cardYear");
let inputNumber = document.getElementById("inputNum");
let inputName = document.getElementById("inputName");
let inputCvv = document.getElementById("inputCvv");
let inputMonth = document.getElementById("inputMonth");
let inputYear = document.getElementById("inputYear");
let fillInfo = document.getElementById("fillInfo");
let thankYou = document.getElementById("thankYou")

const confirmBtn = document.getElementById("confirm");
const continueBtn = document.getElementById("continue");

const confirm =()=>{
    cardNumber.textContent = inputNumber.value;
    cardName.textContent = inputName.value;
    cardCvv.textContent = inputCvv.value;
    cardMonth.textContent = inputMonth.value;
    cardYear.textContent = inputYear.value;

    inputNumber.value = ""
    inputName.value = ""
    inputCvv.value = ""
    inputMonth.value = ""
    inputYear.value = ""

    // fillInfo.classList.toggle("hidden")
    // thankYou.classList.toggle("hidden")
}

