function offSwitch() {
    let selectBulbImageElement =  document.getElementById("bulbImage");
    selectBulbImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    let selectCatImageElement = document.getElementById("catImage");
    selectCatImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    let selectSwitchStatusElement = document.getElementById("switchStatus");
    selectSwitchStatusElement.textContent = "Switched Off";
    let selectOnButtonElement = document.getElementById("onButton");
    selectOnButtonElement.style.backgroundColor = "#22c55e";
    let selectOffButtonElement = document.getElementById("offButton");
    selectOffButtonElement.style.backgroundColor = "#cbd2d9";
}

function onSwitch() {
    let selectBulbImageElement =  document.getElementById("bulbImage");
    selectBulbImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    let selectCatImageElement = document.getElementById("catImage");
    selectCatImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    let selectSwitchStatusElement = document.getElementById("switchStatus");
    selectSwitchStatusElement.textContent = "Switched On";
    let selectOnButtonElement = document.getElementById("onButton");
    selectOnButtonElement.style.backgroundColor = "#cbd2d9";
    let selectOffButtonElement = document.getElementById("offButton");
    selectOffButtonElement.style.backgroundColor = "#e12d39";
}