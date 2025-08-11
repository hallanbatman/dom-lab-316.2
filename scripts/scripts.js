// DOM Elements
const body = document.querySelector('body');

let answer = prompt(`What is your name?`);
let title = document.createElement('h1');
title.textContent = `Welcome to our website ${answer}`;

body.appendChild(title);