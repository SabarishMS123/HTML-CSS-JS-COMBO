document.addEventListener("DOMContentLoaded", () => {
    const inputBox = document.getElementById("input-box");
    const taskList = document.getElementById("task-list");

    window.addTask = function () {
        const taskText = inputBox.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button onclick="this.parentElement.remove()">❌</button>`;
        taskList.appendChild(li);

        inputBox.value = "";
    };
});