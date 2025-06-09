let randomnumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevguess = [];
let numguess = 1;

let playgame = true;
if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);

    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number!')
    }
    else if (guess < 1 || guess > 100) {
        alert('Please enter a number between 1 and 100!')
    }
    else
    {
        prevguess.push(guess);
        if(numguess===11)
        {
            displayguess(guess)
            displaymessage(`Game over. Ransom number was ${randomnumber}`)
            endgame()
        }
        else
        {
            displayguess(guess)
            checkguess(guess)

        }
    }
    
    function checkguess(guess) {
        if(guess=== randomnumber){
            displaymessage(`Congratulations! You got it right!`)
            endgame()
        }
        else if(guess< randomnumber){
            displaymessage(`number is too low`)
            
        
        }
        else if(guess> randomnumber){
            displaymessage(`number is too high`)
            
        }
        

    }
    function displayguess(guess) {
        userInput.value=''
        guessslot.innerHTML+=`${guess},`
        numguess++
        remaining.innerHTML=`${11-numguess}`


    }
    function displaymessage(message) {
        loworhi.innerHTML=`${message}`

    }
    function endgame() {
        userInput.value=''
        userInput.setAttribute('disabled','true')
        p.classList.add('button')
        p.innerHTML=`<h2 id="newgame">Start new Game</h2>`;
        startover.appendChild(p)
        playgame=false
        newgame()

    }
    function newgame() {
       const newgamebutton= document.querySelector('#newgame')
       newgamebutton.addEventListener('click',function(e){
        randomnumber = parseInt(Math.random() * 100 + 1);
        prevguess = [];
        numguess = 1;
        guessslot.innerHTML=''
        remaining.innerHTML=`${11-numguess}`
        userInput.removeAttribute('disabled')
        startover.removeChild(p)

        
        playgame=true
       })

    }
}