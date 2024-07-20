let firstNumElement = document.getElementById("firstNumber");
let secondNumElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");
setRandomNumbers();

function setRandomNumbers() {
    firstNumElement.textContent = Math.ceil(Math.random() * 100);
    secondNumElement.textContent = Math.ceil(Math.random() * 100);
}

function checkResult() {
    const firstValue = firstNumElement.textContent;
    const updatedFirstValue = parseInt(firstValue);
    const secondValue = secondNumElement.textContent;
    const updatedSecondValue = parseInt(secondValue);
    const userInputValue = parseInt(userInputElement.value);

    if (userInputValue === (updatedFirstValue + updatedSecondValue)) {
        gameResultElement.textContent = "Congrats!";
        gameResultElement.style.backgroundColor = "#028a0f";
    }
    else {
        gameResultElement.textContent = "Try again!";
        gameResultElement.style.backgroundColor = "#1e217c";
    }
}

function onRestart() {
    setRandomNumbers();
    gameResultElement.textContent = "";
    userInputElement.value = "";
}