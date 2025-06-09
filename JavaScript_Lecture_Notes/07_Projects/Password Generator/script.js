const password_length_elem = document.getElementById("passLen");
const generate_btn = document.getElementById("genBtn");
const random_password = document.getElementById("randomPass");

let canTurnOn = true;

generate_btn.addEventListener("click", (e) => {
  e.preventDefault();

  random_password.innerHTML = "";
  let possible_char =
    "qwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&QWERTYUIOPASDFGHJKLZXCVBNM";
  possible_char = possible_char.split("");

  let passLen = 0;
  if (canTurnOn) {
    const intervalId = setInterval(function () {
      canTurnOn = false;
      if (passLen == password_length_elem.value) {
        clearInterval(intervalId);
        canTurnOn = true;
        return;
      }

      const index = Math.floor(Math.random() * possible_char.length);

      passLen++;
      const newElem = document.createTextNode(`${possible_char[index]}`);
      random_password.appendChild(newElem);
    }, 75);
  }
});
