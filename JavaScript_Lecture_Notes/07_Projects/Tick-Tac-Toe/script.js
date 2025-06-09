const canvas = document.getElementById("gameArea")
const ctx = canvas.getContext("2d"); //creates a 2d context for the canavas
const gameStatus = document.getElementById("status");
const boxSize = 200; //initializes the size of the grid (box)
let isCross = false; //keeps track of the upcoming move (cross or circle)
let boxValues = new Array(9).fill(undefined); //keeps track of the move played in each box
const ctx2 = document.getElementById("controls").getContext("2d")
const ctx3 = document.getElementById("nextMove").getContext("2d")

//makes a new empty canvas
function startNewGame(d = boxSize) {
    ctx.clearRect (0,0,1000,1000) //resets the canvas before starting a new game
  if (!canvas.getContext) {
    alert("Canvas not supported in your browser!");
    return;
  }
  ctx.beginPath(); //starts a new shape path
  ctx.moveTo(0, d); //goes to an initial point
  ctx.lineTo(3 * d, d); //moves to another point for line
  ctx.stroke(); //strokes between the two points

  ctx.beginPath();
  ctx.moveTo(0, 2 * d);
  ctx.lineTo(3 * d, 2 * d);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(d, 0);
  ctx.lineTo(d, 3 * d);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(2 * d, 0);
  ctx.lineTo(2 * d, 3 * d);
  ctx.stroke();

  ctx3.beginPath();
ctx3.arc(50, 50, 30, 0, 2 * Math.PI);
ctx3.stroke();
}
// used to add a circle to any box (n)
function circle(n, d = boxSize) {
  if (n <= 0 || n > 9) return;
  let x = (((n - 1) % 3) + 1) * d - d / 2; // x-coordinate of the center of the circle in the box
  let y = Math.floor((n + 2) / 3) * d - d / 2; // y-coordinate of the center of the circle in the box

  ctx.beginPath();
  ctx.arc(x, y, d / 3, 0, 2 * Math.PI);
  ctx.stroke();
}
// used to add a cross to any box (n)
function cross(n, d = boxSize) {
  if (n <= 0 || n > 9) return;

  const x1 = ((n - 1) % 3) * d + d / 5;
  const y1 = Math.floor((n - 1) / 3) * d + d / 5;
  const x2 = ((n - 1) % 3) * d + (4 * d) / 5;
  const y2 = Math.floor((n - 1) / 3) * d + (4 * d) / 5;

  //making one line of the cross
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  const x3 = ((n - 1) % 3) * d + (4 * d) / 5;
  const y3 = Math.floor((n - 1) / 3) * d + d / 5;

  const x4 = ((n - 1) % 3) * d + d / 5;
  const y4 = Math.floor((n - 1) / 3) * d + (4 * d) / 5;

  //making second line of the cross
  ctx.beginPath();
  ctx.moveTo(x3, y3);
  ctx.lineTo(x4, y4);
  ctx.stroke();
}
//used to actually add a move to the grid (box)
function makeMove(boxNumber) {
  if (isCross && boxValues[boxNumber - 1] == undefined) {
    cross(boxNumber);
    isCross = false;
    boxValues[boxNumber - 1] = 1;
  } else if (!isCross && boxValues[boxNumber - 1] == undefined) {
    circle(boxNumber);
    isCross = true;
    boxValues[boxNumber - 1] = 0;
  }

  if (isWinner()) {
    let player = isCross ? "O" : "X";
    gameStatus.innerText = `${player} has won!`
  }
}
//checks if someone won (true) or not (false). ALso checks for draw itself
function isWinner() {
    let arr = ["123", "456", "789", "147", "258", "369", "159", "357"];
  
    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = 0; j < 3; j++) {
        let index = Number(arr[i].charAt(j)) - 1;
  
        if (boxValues[index] == undefined) {
          sum = -1;
          break;
        }
        sum += boxValues[index];
      }
      if (sum == 0 || sum == 3) {
        return true;
      }
    }

    
    //check for draw

    let isDraw = true

    for (let p = 0; p < boxValues.length; p++) {
        if (boxValues[p] == undefined) {
            isDraw = false;
            break
        }
    }

    if (isDraw) {
        gameStatus.innerText = "Draw!"
    }
  
    return false;

}
//Attach the keys to play the moves and call makeMove()
window.addEventListener("keypress", (e) => {
  let box;
  if (e.key >= 1 && e.key <= 3) box = Number(e.key) + 6;
  else if (e.key >= 7 && e.key <= 9) box = Number(e.key) - 6;
  else if (e.key >= 4 && e.key <= 6) box = Number(e.key);

  makeMove(box);
});

function gameControls (d = boxSize/4) {
  
  ctx2.beginPath(); //starts a new shape path
  ctx2.moveTo(0, d); //goes to an initial point
  ctx2.lineTo(3 * d, d); //moves to another point for line
  ctx2.stroke(); //strokes between the two points

  ctx2.beginPath();
  ctx2.moveTo(0, 2 * d);
  ctx2.lineTo(3 * d, 2 * d);
  ctx2.stroke();

  ctx2.beginPath();
  ctx2.moveTo(d, 0);
  ctx2.lineTo(d, 3 * d);
  ctx2.stroke();

  ctx2.beginPath();
  ctx2.moveTo(2 * d, 0);
  ctx2.lineTo(2 * d, 3 * d);
  ctx2.stroke();
}

startNewGame();
gameControls()
