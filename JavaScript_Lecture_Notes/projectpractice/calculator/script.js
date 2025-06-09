const buttons = document.querySelectorAll(".buttons button")
let display = document.getElementById('display')

//! event listener on buttons
buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        btn.blur() //after clicking it removes the selection so when we press enter key no error occurs
        let val = e.target
        if (val.innerHTML == "C") {
            display.value = ""
        }
        else if (val.innerHTML == "=") {
            let result = eval(display.value)
            display.value = result
        }

        else {
            display.value += val.innerHTML
        }

    })
});
document.addEventListener('keydown', function (e) {//event outside the foreach block so that the key does not repeat
    const allowedKeys = /[0-9+\-*/.]/;//regex string it has range 0 to 9, and the symbols

    let val = e.key
    if (val == "C" || val == "c") {
        display.value = ""
    }
    else if (val == "Enter") {
        try {
            let result = eval(display.value)
            display.value = result

        } catch (error) {
            display.value = "error"
            



        }
    }
    else if (val == 'Backspace') {
        display.value = display.value.slice(0, -1)//slice returns the string from 0 to -1(not including -1)
    }

    else if (allowedKeys.test(val)) { //test is used for checking it only works with regex not with normal string
        display.value += val
    }

})

//! save to history
function updatehistory(expression, result){
    

}






