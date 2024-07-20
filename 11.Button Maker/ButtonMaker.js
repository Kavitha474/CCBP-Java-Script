let bgColorInputElement = document.getElementById("bgColorInput");
let fontColorInputElement = document.getElementById("fontColorInput");
let fontSizeInputElement = document.getElementById("fontSizeInput");
let fontWeightInputElement = document.getElementById("fontWeightInput");
let paddingInputElement = document.getElementById("paddingInput");
let borderRadiusInputElement = document.getElementById("borderRadiusInput");
let customButtonElement = document.getElementById("customButton");

function applyProperties() {
    customButtonElement.style.backgroundColor = bgColorInputElement.value;
    customButtonElement.style.color = fontColorInputElement.value;
    customButtonElement.style.fontSize = parseInt(fontSizeInputElement.value) + "px";
    customButtonElement.style.fontWeight = parseInt(fontWeightInputElement.value);
    customButtonElement.style.padding = parseInt(paddingInputElement.value) + "px";
    customButtonElement.style.borderRadius = parseInt(borderRadiusInputElement.value) + "px";
}