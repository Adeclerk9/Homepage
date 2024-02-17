"use strict";

const oldParagraph = document.getElementById("message");

const age = parseInt(prompt("Enter your current age to see how old you will be in 10 years"));

const newage = (age + 10);

const button = document.getElementById("myBtn");

const displayAge = function(age){
   const ageParagraph = document.createElement("p");
   const text = document.createTextNode(age);
   ageParagraph.appendChild(text);
   const parent = oldParagraph.parentNode;
   parent.insertBefore(ageParagraph, oldParagraph);

}

button.addEventListener("click", function(){
    displayAge(newage);
});

function getbirthday(newage){
    
    var birthdaymsg = "";

    for (let i = 0; i < newage; i++){
        birthdaymsg += "Happy Birthday " + (i + 1) + " " ;
        console.log("happy birthday " + (i + 1));
    }

    oldParagraph.innerHTML = birthdaymsg;
}

getbirthday(newage);



