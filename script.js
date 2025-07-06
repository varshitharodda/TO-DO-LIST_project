// Load saved tasks when the page starts

window.onload = () => {

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(task => addTaskToDOM(task));

};

// Add a new task to the list

function addTask() {

  const taskInput = document.getElementById("taskInput");

  const taskText = taskInput.value.trim();

  if (taskText === "") {

    alert("Please enter a task.");

    return;

  }

  addTaskToDOM(taskText);

  saveTask(taskText);

  taskInput.value = "";

}

// Add a task item to the displayed list

function addTaskToDOM(taskText) {

  const li = document.createElement("li");

  li.textContent = taskText;

  const delBtn = document.createElement("button");

  delBtn.textContent = "🗑️";

  delBtn.classList.add("delete-btn");

  delBtn.onclick = () => {

    li.remove();

    deleteTask(taskText);

  };

  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);

}

// Store the new task in localStorage

function saveTask(task) {

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

}

// Remove a task from localStorage

function deleteTask(taskToDelete) {

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks = tasks.filter(task => task !== taskToDelete);

  localStorage.setItem("tasks", JSON.stringify(tasks));

}

