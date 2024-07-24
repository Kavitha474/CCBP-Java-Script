let itemList = [{
    itemName: "Veg Biryani",
    uniqueNo: 1,
},
{
    itemName: "Chicken 65",
    uniqueNo: 2,
},
{
    itemName: "Paratha",
    uniqueNo: 3,
}
];
let itemsListContainerEl = document.getElementById("ulContainer");

function onDeleteItem(itemId) {
let itemEl = document.getElementById(itemId);
itemsListContainerEl.removeChild(itemEl);
}

function createAndAppendItem(item) {

let itemId = "item" + item.uniqueNo;
let buttonId = "button" + item.uniqueNo;

let itemEl = document.createElement("li");
itemEl.id = itemId;
itemEl.classList.add("ordered-item");
itemEl.textContent = item.itemName;
itemsListContainerEl.appendChild(itemEl);

let buttonEl = document.createElement("button");
buttonEl.textContent = "Cancel";
buttonEl.id = buttonId;
buttonEl.classList.add("btn", "btn-danger", "ml-3");
buttonEl.onclick = function() {
    onDeleteItem(itemId);
};
itemEl.appendChild(buttonEl);
}

for (let item of itemList) {
createAndAppendItem(item);
}