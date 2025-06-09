//* Keytakeaways

/*

- rgb has 256 values each (0-255)
- alpha represents the opacity of the colour (0-1)

*/


let intervalId; //intervalId refernce is set to global scope to access it everywhere!

let isColorShift = false; //this is done to avoid triggering multiple setInterval

//This function firstly generates four randokm values, r, g, b and a. All of which combine to give a unique colour on every click

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const alpha = Math.random().toFixed(2)

  document.body.style.backgroundColor = `rgba(${red}, ${blue}, ${green}, ${alpha})`;

  document.getElementById(
    "colorId"
  ).innerHTML = `rgba(${red}, ${blue}, ${green}, ${alpha})`;

}

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

startBtn.addEventListener("click", () => {
  if (!isColorShift) {
    intervalId = setInterval(randomColor, 1000);
    isColorShift = true
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  isColorShift = false
});
