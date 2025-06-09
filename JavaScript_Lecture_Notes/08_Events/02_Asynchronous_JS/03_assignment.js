// To start printing when the start button is pressed and stop when the stop button is pressed

const startBtn = document.querySelector ('#start')
const stopBtn = document.querySelector ('#stop')
let intervalReference;

const printFunc = (str) => {
    const newElement = document.createElement ('p')
    newElement.appendChild (document.createTextNode (str))
    document.body.appendChild (newElement)
}


startBtn.addEventListener ('click', (e) => {
    intervalReference = setInterval (printFunc, 2000, "Pranaw")
})
   

stopBtn.addEventListener ('click', (e) => {

    clearInterval (intervalReference)

})


//! Here when we click the start button, text appears on the screen after every 2 seconds and when we click the stop button, text stops appearing (NOTE:: Don't click start button more than once before stoping)- to tackle this we can use bool and make some if-else statements