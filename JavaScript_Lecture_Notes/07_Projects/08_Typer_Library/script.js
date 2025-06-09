let arr; //this is the array of strings

const sound = document.querySelector("#type_audio");

const timeDelay = 120;
const factor = 5;

const txtArea = document.querySelector(".typed-text");

function deleteLetters(value) {
  let index = value.length;

  const endId = setInterval(() => {
    let newTxt = value.substr(0, index);
    index--;

    txtArea.innerHTML = newTxt;

    if (index == -1) {
      clearInterval(endId);
      sound.pause()
      randomIdgenerator();
    }
  }, timeDelay);
}

function addLetters(i) {
  const value = arr[i];
  console.log(arr);
  if (arr.length == 0) {
    console.log("END");

    setTimeout(newLetters, timeDelay * factor);

    return;
  }

  arr.splice(i, 1);

  let index = 0;

  const startId = setInterval(() => {
    let newTxt = value.substr(0, index + 1);
    index++;

    txtArea.innerHTML = newTxt;
    sound.play();
    sound.loop = true;

    if (index == value.length) {
      clearInterval(startId);
      sound.pause();

      setTimeout(() => {
        deleteLetters(value);
        sound.play();
      }, timeDelay * factor);
    }
  }, timeDelay);
}

function randomIdgenerator() {
  const i = Math.floor(Math.random() * arr.length);

  setTimeout(() => {
    addLetters(i);
  }, timeDelay * factor);
}

async function newLetters() {
  let randomTextCollection = await fetch("extraTxt.txt");

  randomTextCollection = await randomTextCollection.text();

  arr = await randomTextCollection.split("\n");

  randomIdgenerator();
}

newLetters();
