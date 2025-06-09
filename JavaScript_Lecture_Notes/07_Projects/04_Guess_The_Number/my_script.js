let compNumber = Math.ceil(Math.random() * 100); //generates a random number (1 - 100)

//number of reamining guesses
let guessRemaining = document.querySelector(".lastResult");

let form = document.querySelector("form");

let previousGuess = [];

form.addEventListener("submit", checkguess);

function checkguess (e) {
    e.preventDefault();

    const message = document.querySelector(".lowOrHi");

    let userGuess = Number(document.querySelector("#guessField").value);

    previousGuess.push(userGuess);

    previousGuess.forEach((_, __, previousGuess) => {
      document.querySelector("span.guesses").innerHTML = previousGuess;
    });

    if (userGuess != compNumber) {
      guessRemaining.innerHTML = Number(Number(guessRemaining.innerHTML) - 1);

      if (guessRemaining.innerHTML == 0) {
        alert("You lost!");
        form.removeEventListener ("submit", checkguess)
        resetf();
        return;
      }
      if (userGuess > compNumber) {
        message.innerText = "Guess lower!";
      } else {
        message.innerText = "Guess Higher!";
      }
    } else {
      alert("You won!");
      resetf();
    }

    document.querySelector("#guessField").value = "";

  }

function resetf() {
    console.warn ("Game Reset!")
    compNumber = Math.ceil(Math.random() * 100);
    guessRemaining.innerHTML = 10;
    const message = document.querySelector(".lowOrHi");
    message.innerText = "Start Playing!";
    previousGuess = []
    document.querySelector("span.guesses").innerHTML = '';   
    form.addEventListener ("submit", checkguess) 
  }

  





