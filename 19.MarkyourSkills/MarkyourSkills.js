let skillsContainer = document.getElementById("skillsContainer");
let ulContainer = document.getElementById("ulContainer");

let skillList = [{
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    }
];

function changeColor(labelId){
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("skill-color");
}

function createNewTodo(value) {
    let checkboxId = "checkbox" + value.uniqueNo;
    let labelId = "label" + value.uniqueNo;
    
    let listItem = document.createElement("li");
    listItem.classList.add("list-style");
    ulContainer.appendChild(listItem);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.onclick = function(){
        changeColor(labelId);
    };
    listItem.appendChild(inputElement);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for",checkboxId);
    labelElement.id = labelId;
    labelElement.textContent = value.skillName;
    listItem.appendChild(labelElement);
}

for (let eachSkill of skillList) {
    createNewTodo(eachSkill);
}