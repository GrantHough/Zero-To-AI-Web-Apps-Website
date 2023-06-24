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

let disappear = document.querySelector("#disappear");
let reappear = document.querySelector("#reappear");
let text = document.querySelector("#text");

// These use arrow functions, they're just a shorter way of declaring a function

checkboxButton.addEventListener("click", () => {
    console.log(checkbox.checked);
});

dateButton.addEventListener("click", () => {
    console.log(date.value);
});

fileButton.addEventListener("click", () => {
    console.log(file.value);
});

rangeButton.addEventListener("click", () => {
    console.log(range.value);
});

colorButton.addEventListener("click", () => {
    console.log(color.value);
});


disappear.addEventListener("click", function() {
    text.style.display = "none";
})

reappear.addEventListener("click", function() {
    text.style.display = "block";
})