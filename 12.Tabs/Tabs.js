let aboutTabElement = document.getElementById("aboutTab");
let timeToVisitTabElement = document.getElementById("timeToVisitTab");
let attractionsTabElement = document.getElementById("attractionsTab");

let aboutButtonElement = document.getElementById("aboutButton");
let timeToVisitButtonElement = document.getElementById("timeToVisitButton");
let attractionsButtonElement = document.getElementById("attractionsButton");

timeToVisitTabElement.classList.add("d-none");
attractionsTabElement.classList.add("d-none");

function aboutTabBtn() {
    timeToVisitTabElement.classList.add("d-none");
    attractionsTabElement.classList.add("d-none");
    aboutTabElement.classList.remove("d-none");
    aboutButtonElement.classList.add("selected-button");
    timeToVisitButtonElement.classList.remove("selected-button");
    attractionsButtonElement.classList.remove("selected-button");
}

function timeToVisitTabBtn() {
    timeToVisitTabElement.classList.remove("d-none");
    attractionsTabElement.classList.add("d-none");
    aboutTabElement.classList.add("d-none");
    timeToVisitButtonElement.classList.add("selected-button");
    aboutButtonElement.classList.remove("selected-button");
    attractionsButtonElement.classList.remove("selected-button");
}

function attractionsTabBtn() {
    timeToVisitTabElement.classList.add("d-none");
    aboutTabElement.classList.add("d-none");
    attractionsTabElement.classList.remove("d-none");
    attractionsButtonElement.classList.add("selected-button");
    aboutButtonElement.classList.remove("selected-button");
    timeToVisitButtonElement.classList.remove("selected-button");
}