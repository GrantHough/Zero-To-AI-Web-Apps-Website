//Get HTML elements
let element1 = document.querySelector("#sentence-1");
let element2 = document.querySelector("#sentence-2");
let element3 = document.querySelector("#sentence-3");

//Get the actual text (innerHTML)
let sentence1 = element1.innerHTML;
let sentence2 = element2.innerHTML;
let sentence3 = element3.innerHTML;

//Create array of sentences
let sentenceArray = [];

//Set values to the sentences
sentenceArray[0] = sentence1;
sentenceArray[1] = sentence2;
sentenceArray[2] = sentence3;

//Loop through the array
for (let i = 0; i < sentenceArray.length; i++) {
    //Log the index
    console.log(i);

    //Log the sentence
    console.log(sentenceArray[i]);
}