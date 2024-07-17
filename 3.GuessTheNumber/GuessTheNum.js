let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);
let inputElement = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
function checkGuess(){
    let guessedNumber = parseInt(inputElement.value);
console.log(guessedNumber);
if(guessedNumber > randomNumber){
    gameResult.textContent = "Too High! Try Again.";
    gameResult.style.backgroundColor = "darkblue";
}
else if(guessedNumber < randomNumber){
    gameResult.textContent = "Too Low! Try Again.";
    gameResult.style.backgroundColor = "darkblue";
}
else if(guessedNumber === randomNumber){
    gameResult.textContent = "Congratulations! You got it Right.";
    gameResult.style.backgroundColor = "Green";
}
else{
    gameResult.textContent = "Please Enter valid input";
    gameResult.style.backgroundColor = "red";
}
}