let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let groceryListContainer = document.getElementById("groceryListContainer");

let headingElement = document.createElement("h1");
headingElement.classList.add("heading");
headingElement.textContent = "Grocery List";
groceryListContainer.appendChild(headingElement);

let ulContainer = document.createElement("ul");
    ulContainer.classList.add("card-container");
    groceryListContainer.appendChild(ulContainer);
function createNewItem(eachItem) {
    
    let liItem = document.createElement("li");
    liItem.textContent = eachItem;
    ulContainer.appendChild(liItem);
}

for (let eachItem of groceryList) {
    createNewItem(eachItem);
}