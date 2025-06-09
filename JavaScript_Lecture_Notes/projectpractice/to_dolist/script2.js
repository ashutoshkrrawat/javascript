//! to do list using "hide save button"  

let task = document.getElementById('taskList')
const btn = document.getElementById('addTaskBtn')
function additem(item) {
    const div = document.createElement("div")

    const list = document.createElement("li")
    list.innerHTML = `${item}`
    document.getElementById('taskList').appendChild(div)
    div.appendChild(list)

    const removeBtn = document.createElement('button')
    const editBtn = document.createElement('button')
    const savebtn = document.createElement('button')

    savebtn.innerText = "Save"
    removeBtn.innerText = "X"
    editBtn.innerText = "Edit"

    div.appendChild(savebtn)
    div.appendChild(removeBtn)
    div.appendChild(editBtn)

    savebtn.hidden = true
    removeBtn.addEventListener('click', function (e) {
        console.log("entered removebtn");
        remove(e)
    })

    const input = document.createElement('input')
    const li = div.querySelector('li')
    editBtn.addEventListener('click', function (e) {

        const div = e.target.parentElement
        const text = li.innerHTML
        input.value = text  // so that the original text does not gets erased
        div.replaceChild(input, li) //the list get replaced with input so that the original list does not gets displayed along with input field
        input.focus()//ensures that the cursor automatically get placed in the input box after clicking edit
        editBtn.hidden = true
        savebtn.hidden = false
        console.log(document.querySelector('body').style.backgroundColor.value)

    })
    savebtn.addEventListener('click', function (e) {

        li.innerHTML = input.value
        div.replaceChild(li, input)
        editBtn.hidden = false
        savebtn.hidden = true

    })
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {

            li.innerHTML = input.value
            div.replaceChild(li, input)
            editBtn.hidden = false
            savebtn.hidden = true
        }

    })

}

//! to remove element
function remove(e) {
    e.target.parentElement.remove()

}

//! add task button
btn.addEventListener('click', function (e) {
    e.preventDefault()
    const task = document.getElementById('taskInput')
    if (task.value !== "") {

        additem(task.value)
        task.value = ""
    }
})
const taskinput = document.getElementById('taskInput')

//! enter key button
taskinput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault()
        if (taskinput.value !== "") {

            additem(taskinput.value)
            taskinput.value = ""
        }

    }

})

//! toggle theme button

const themebtn = document.getElementById('themeToggle')
const bg = document.querySelector('body')
themebtn.addEventListener('click', function () {
    const currentBg = getComputedStyle(bg).backgroundColor;

    const h1 = document.querySelector('h1')
    if (currentBg !== 'rgb(35, 33, 33)') {

        h1.style.color = 'rgb(255, 255, 255)'
        bg.style.backgroundColor = 'rgb(35, 33, 33)'
    }
    else {
        bg.style.backgroundColor = 'rgb(248, 247, 247)'
        h1.style.color = 'rgb(0, 0, 0)'
    }


})











































