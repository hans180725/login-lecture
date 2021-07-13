"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
const registerBtn = document.querySelector("button");

registerBtn.addEventListener("click", register);

function register() {
  const req = {
    id: id.value,
    name: name.value,
    password: password.value,
    confirm: confirm.value,
  }
  
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req)
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("Register error!");
    });
}