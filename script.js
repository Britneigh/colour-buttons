"use strict"
//Challenge: Using closures, create three buttons for each colour value: Blue, Pink and Green. Clicking a button should change the document body colour to the colour value.

function changeColour(colour){
    return function(){
        document.body.style.backgroundColor = colour;
    }
}

const blue = changeColour("blue");
const pink = changeColour("hotpink");
const green = changeColour("green");

document.getElementById("blueBtn").addEventListener("click", blue);
document.getElementById("pinkBtn").addEventListener("click", pink);
document.getElementById("greenBtn").addEventListener("click", green);