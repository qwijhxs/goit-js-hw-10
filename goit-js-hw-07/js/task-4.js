"use strict";


const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = loginForm.querySelector('[name="email"]');
    const password = loginForm.querySelector('[name="password"]');

    if (email.value !== "" && password.value !== "") {
        console.log({email: email.value.trim(), password: password.value.trim()});
    } else {
        window.alert("All form fields must be filled in");
    }

    email.value = "";
    password.value = "";
});