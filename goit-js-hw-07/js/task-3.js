"use strict";


const nameInput = document.querySelector("#name-input");

nameInput.addEventListener("input", () => {
    const nameOutput = document.querySelector("#name-output");
    const trimmedValue = nameInput.value.trim();
    nameOutput.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});