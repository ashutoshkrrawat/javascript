const textArea = document.querySelector('#input-field')

const upperCaseBtn = document.querySelector ('.btn_uppercase')
const lowerCaseBtn = document.querySelector ('.btn_lowercase')
const defaultBtn = document.querySelector ('.btn_capitalize')
const boldBtn = document.querySelector('.btn_bold')
const italicBtn = document.querySelector ('.btn_italic')
const underlineBtn = document.querySelector ('.btn_underline')

const outputArea = document.querySelector('#output-field')

upperCaseBtn.addEventListener ('click', (e) => {
    textArea.addEventListener ('keyup', (e) => {
        e.target.value = e.target.value.toUpperCase()
    })
});

lowerCaseBtn.addEventListener ('click', (e) => {

});

defaultBtn.addEventListener ('click', (e) => {

});

boldBtn.addEventListener ('click', (e) => {

});

italicBtn.addEventListener ('click', (e) => {

});

underlineBtn.addEventListener ('click', (e) => {

});

let temp;

textArea.addEventListener ('keypress', (e) => {
    temp = e.keyCode
    console.log("temp inside: ",temp);
}, false)
//special-chracters
textArea.addEventListener ('keydown', (e) => {

//     const letter = document.createTextNode(e.key)

//     console.log(e.keyCode);
//     if (letter.textContent == "Backspace" && outputArea.lastChild) {
       
//         outputArea.removeChild(outputArea.lastChild)
       
//     }
// else if (e.keyCode >= 65 && e.keyCode <= 90) {
//     outputArea.appendChild(letter)

//     console.log(letter);
//     // outputArea.innerHTML = e.target.value
// }
console.log("temp outside:",temp);
console.log("keyCode:",e.keyCode);

if (temp == e.keyCode) {
    const letter = document.createTextNode(e.key)

//     console.log(e.keyCode);
outputArea.appendChild(letter)

//     console.log(letter);
}
    
}, false)

