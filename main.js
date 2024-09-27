'use strict';

let div = document.body.children[0];
let ul = document.body.children[1];
let li = document.body.children[1].lastElementChild;

console.log(div); 
console.log(ul); 
console.log(li); 

const listItem = document.querySelectorAll("li");

for (const li of listItem) {
    li.classList.add("list-item");
}

let num = +prompt("Введите количество блоков");

for (let i = 0; i < num; i++){
  let div = document.createElement('div');
  document.body.children[1].after(div)
}



const form = document.createElement("form");

const nameInput = document.createElement("input");
nameInput.placeholder = "имя";

const emailInput = document.createElement("input");
emailInput.placeholder = "email";

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.value = "Отправить";

form.appendChild(nameInput);    
form.appendChild(emailInput);
form.appendChild(submitButton);

document.body.append(form);