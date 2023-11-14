const submitBtn = document.getElementById("btn");
const form = document.querySelector("form");
const error = document.querySelector(".error");
const label = document.querySelector("label[for='email']"); // Select label by 'for' attribute
const input = document.querySelector("#email");

form.addEventListener("submit", validate);

function validate(e) {
  e.preventDefault();

  const inputValue = input.value.trim();
  const isValidEmail = isEmail(inputValue);

  if (!isValidEmail) {
    error.style.display = "inline";
    label.style.display = "block";
  } else {
    error.style.display = "none";
    label.style.display = "none";
  }
}

function isEmail(input) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}
