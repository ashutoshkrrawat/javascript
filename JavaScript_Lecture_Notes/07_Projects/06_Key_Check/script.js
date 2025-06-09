//* Keytakeaways

/*

//! Different types of events

- click
- submit
- keydown : when a key is pressed down (this is advisable over keypress)
- keyup : when a key is released
- keypress :  only triggers for keys that produce a character value. It Won't fire for keys like Shift, Alt, Ctrl, Escape, arrows etc.

*/


window.addEventListener ('keydown', (e) => {
    document.getElementById('a1').innerHTML = `${e.key}`
})


window.addEventListener ('keyup', (e) => {
    document.getElementById('a2').innerHTML = `${e.key}`
})

window.addEventListener ('keypress', (e) => {
    document.getElementById('a3').innerHTML = `${e.code}`
})








