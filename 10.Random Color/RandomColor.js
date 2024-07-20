let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let lengthOfArray = bgColorsArray.length;
let bgContainerElement = document.getElementById("bgContainer");

function clickMe() {
    let index = Math.ceil(Math.random() * 10);
    if (index < lengthOfArray) {
        let color = bgColorsArray[index];
        bgContainerElement.style.backgroundColor = color;
    }
}