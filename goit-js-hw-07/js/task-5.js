"use strict";


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");

button.addEventListener("click", () => {
  const body = document.querySelector("body");
  const color = document.querySelector(".color");

  color.innerHTML = getRandomHexColor();
  body.style.backgroundColor = color.textContent;
});