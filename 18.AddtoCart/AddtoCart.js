let ulContainerElement = document.getElementById("ulContainer");
let cartItemTextInputElement = document.getElementById("cartItemTextInput");
let addBtnElement = document.getElementById("addBtn");

function addCartItems(value) {

    let listitem = document.createElement("li");
    listitem.textContent = value;
    listitem.classList.add("list-items");
    ulContainerElement.appendChild(listitem);
    cartItemTextInputElement.value = "";
    if(value === ""){
        alert("Please Enter Valid text");
    }
}

addBtnElement.onclick = function() {
    addCartItems(cartItemTextInputElement.value);
}