"use strict";

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector(".form__button");
const errorMessages = document.querySelectorAll(".form--error-message");
const errorIcons = document.querySelectorAll(".error-icon");
const formInputs = document.querySelectorAll(".form__input");

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    firstName.value === "" ||
    lastName.value === "" ||
    password.value === "" ||
    !emailRegExp.test(email.value)
  ) {
    errorIcons.forEach((errorIcon) => {
      errorIcon.classList.add("active");
    });

    errorMessages.forEach((message) => {
      message.classList.add("active");
    });

    formInputs.forEach((form) => {
      form.style.border = "1px solid red";
    });
  } else {
    errorIcons.forEach((errorIcon) => {
      errorIcon.classList.remove("active");
    });

    errorMessages.forEach((message) => {
      message.classList.remove("active");
    });

    formInputs.forEach((form) => {
      form.style.border = "1px solid gray";
    });

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
  }
});
