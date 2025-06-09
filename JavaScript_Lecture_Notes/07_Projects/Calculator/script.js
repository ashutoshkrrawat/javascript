const key_on_calc = document.querySelector ('.keys').children
const textArea = document.querySelector ('#text-area')
const pastCalc = document.querySelector ('.past-calculation')
const key_list = Array.from (key_on_calc)
const pastBtn = document.querySelector ('#deletePast')

pastBtn.addEventListener ('click', (e) => {
    e.preventDefault()
    pastCalc.innerHTML = ""
})

function addToText (e) {
    if (e.target.innerHTML == '=') {

        const newElement = document.createElement('p')

        newElement.appendChild (document.createTextNode(textArea.innerHTML))


        textArea.innerHTML = eval (textArea.innerText)

        newElement.appendChild (document.createTextNode(` = ${textArea.innerHTML}`))

        pastCalc.appendChild (newElement)


        return;
    }
    if (e.target.innerText == 'C') {
        textArea.innerHTML = ""
        return;
    }
    textArea.appendChild(document.createTextNode (e.target.innerText))
}

for (let i = 0; i < key_list.length; i++) {
    console.log(key_list[i]);
    key_list[i].addEventListener ('click', addToText)
}

const allowedKeys = "0123456789/*-+"


document.addEventListener ('keydown', (e) => {

    if (allowedKeys.includes(e.key)) {
        textArea.appendChild(document.createTextNode (e.key))
    }

    else if (e.key == "Backspace" || e.key == "Delete") {
        textArea.removeChild(textArea.lastChild)
    }

    else if (e.key == "Escape") {
        textArea.innerHTML = ""
    }

    else if (e.key == "Enter") {const newElement = document.createElement('p')

        newElement.appendChild (document.createTextNode(textArea.innerHTML))


        textArea.innerHTML = eval (textArea.innerText)

        newElement.appendChild (document.createTextNode(` = ${textArea.innerHTML}`))

        pastCalc.appendChild (newElement)
    }

    
})


