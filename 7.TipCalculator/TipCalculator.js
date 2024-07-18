let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage");
let calculateButton = document.getElementById("calculateButton");

function onCalculateButton() {
    let billAmountElementValue = parseInt(billAmountElement.value);
    let percentageTipElementValue = parseInt(percentageTipElement.value);
    let tipAmountElementValue = billAmountElementValue * (percentageTipElementValue / 100);
    if (billAmountElement.value === "") {
        errorMessageElement.textContent = "Please Enter a Valid Input";
    } else if (percentageTipElement.value === "") {
        errorMessageElement.textContent = "Please Enter a Valid Input";
    } else {
        errorMessageElement.textContent = "";
        tipAmountElement.value = tipAmountElementValue;
        totalAmountElement.value = billAmountElementValue + tipAmountElementValue;
    }
}