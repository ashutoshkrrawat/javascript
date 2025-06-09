let taskList = document.getElementById('taskList');
const btn = document.getElementById('addTaskBtn');

// Load tasks from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => additem(task));
});

function updateLocalStorage() {
    const allTasks = Array.from(document.querySelectorAll('#taskList li')).map(li => li.textContent);
    localStorage.setItem('tasks', JSON.stringify(allTasks));
}

function additem(item) {
    const div = document.createElement("div");
    const list = document.createElement("li");
    list.innerText = item;

    taskList.appendChild(div);
    div.appendChild(list);

    const removeBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    const saveBtn = document.createElement('button');

    removeBtn.innerText = "X";
    editBtn.innerText = "Edit";
    saveBtn.innerText = "Save";

    div.appendChild(saveBtn);
    div.appendChild(removeBtn);
    div.appendChild(editBtn);

    saveBtn.hidden = true;

    // Remove
    removeBtn.addEventListener('click', function (e) {
        e.target.parentElement.remove();
        updateLocalStorage();
    });

    // Edit
    const input = document.createElement('input');
    const li = div.querySelector('li');

    editBtn.addEventListener('click', function () {
        input.value = li.innerText;
        div.replaceChild(input, li);
        input.focus();
        editBtn.hidden = true;
        saveBtn.hidden = false;
    });

    // Save
    saveBtn.addEventListener('click', function () {
        li.innerText = input.value;
        div.replaceChild(li, input);
        editBtn.hidden = false;
        saveBtn.hidden = true;
        updateLocalStorage();
    });

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            li.innerText = input.value;
            div.replaceChild(li, input);
            editBtn.hidden = false;
            saveBtn.hidden = true;
            updateLocalStorage();
        }
    });

    updateLocalStorage(); // Save when new task is added
}

// Add task button
btn.addEventListener('click', function (e) {
    e.preventDefault();
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value !== "") {
        additem(taskInput.value);
        taskInput.value = "";
    }
});

// Enter key to add
document.getElementById('taskInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        if (this.value !== "") {
            additem(this.value);
            this.value = "";
        }
    }
});

// Theme toggle
const themeBtn = document.getElementById('themeToggle');
const bg = document.querySelector('body');

themeBtn.addEventListener('click', function () {
    const currentBg = getComputedStyle(bg).backgroundColor;
    const h1 = document.querySelector('h1');
    if (currentBg !== 'rgb(35, 33, 33)') {
        h1.style.color = 'white';
        bg.style.backgroundColor = 'rgb(35, 33, 33)';
    } else {
        h1.style.color = 'black';
        bg.style.backgroundColor = 'rgb(248, 247, 247)';
    }
});
