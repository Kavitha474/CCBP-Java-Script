let stopBtnElement = document.getElementById("stopButton");
let readyBtnElement = document.getElementById("readyButton");
let goBtnElement = document.getElementById("goButton");

let stopLightElement = document.getElementById("stopLight");
let readyLightElement = document.getElementById("readyLight");
let goLightElement = document.getElementById("golight");

function onStop() {
    stopBtnElement.style.backgroundColor = "#cf1124";
    readyBtnElement.style.backgroundColor = "#1f1d41";
    goBtnElement.style.backgroundColor = "#1f1d41";
    stopLightElement.style.backgroundColor = "#cf1124";
    readyLightElement.style.backgroundColor = "#4b5069";
    goLightElement.style.backgroundColor = "#4b5069";
}

function onReady() {
    readyBtnElement.style.backgroundColor = "#f7c948";
    stopBtnElement.style.backgroundColor = "#1f1d41";
    goBtnElement.style.backgroundColor = "#1f1d41";
    readyLightElement.style.backgroundColor = "#f7c948";
    goLightElement.style.backgroundColor = "#4b5069";
    stopLightElement.style.backgroundColor = "#4b5069";
}

function onGo() {
    goBtnElement.style.backgroundColor = "#199473";
    stopBtnElement.style.backgroundColor = "#1f1d41";
    readyBtnElement.style.backgroundColor = "#1f1d41";
    goLightElement.style.backgroundColor = "#199473";
    stopLightElement.style.backgroundColor = "#4b5069";
    readyLightElement.style.backgroundColor = "#4b5069";
}