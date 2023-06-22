let checkbox = document.querySelector("#checkbox");
let date = document.querySelector("#date");
let file = document.querySelector("#file");
let range = document.querySelector("#range");
let color = document.querySelector("#color");

let checkboxButton = document.querySelector("#checkbox-button");
let dateButton = document.querySelector("#date-button");
let fileButton = document.querySelector("#file-button");
let rangeButton = document.querySelector("#range-button");
let colorButton = document.querySelector("#color-button");

checkboxButton.addEventListener("click", function() {
    console.log(checkbox.checked);
});

dateButton.addEventListener("click", function() {
    console.log(date.value);
});

fileButton.addEventListener("click", function() {
    console.log(file.value);
});

rangeButton.addEventListener("click", function() {
    console.log(range.value);
});

colorButton.addEventListener("click", function() {
    console.log(color.value);
});
