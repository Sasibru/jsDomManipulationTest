"use strict";

const container = document.querySelector('#container');

const redText = document.createElement("p");
redText.textContent = "Hey Im red!";
redText.style.color = "red";
container.appendChild(redText);


const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = "blue";
container.appendChild(blueH3);

const div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.border = "solid black";
const h1 = document.createElement("h1");
div.appendChild(h1);
const appendedP = document.createElement("p");
div.appendChild(appendedP);
h1.textContent = "I'm in a div";
appendedP.textContent = "ME TOO!";
container.appendChild(div);
