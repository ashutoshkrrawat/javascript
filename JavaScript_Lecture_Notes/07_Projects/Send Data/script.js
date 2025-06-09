let userName = document.querySelector("#userName");
let age = document.querySelector("#age");
let mail = document.querySelector("#emailAdress");

const btn = document.querySelector("#submitForm");

class user {
  constructor(userName, age, mail) {
    this.userName = userName;
    this.age = age;
    this.mail = mail;
  }
}

btn.addEventListener("click", (e) => {
  if (!(userName.value && age.value && mail.value)) {
    alert("Kindly enter all details!");
    return;
  }
  let userOne = new user(userName.value, age.value, mail.value);

  async function sendData() {
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userOne),
      });
    } catch (error) {
      console.log("Error is: ", error.message);
    }
  }

  sendData();

  alert("Registeration successful!");
});

const checkuserName = document.querySelector("#userDetails");

const nameOp = document.querySelector("#user-name");
const ageOp = document.querySelector("#user-age");
const mailOp = document.querySelector("#user-mail");

checkuserName.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    async function getUsers() {
      const response = await fetch(
        `http://localhost:3000/users?userName=${checkuserName.value}`
      );

      const data = await response.json();

      if (data) {
        nameOp.innerHTML = data[0].userName;
        ageOp.innerHTML = data[0].age;
        mailOp.innerHTML = data[0].mail;
      }
    }

    getUsers();
  }
});
