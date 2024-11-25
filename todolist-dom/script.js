"use strict";
const button = document.querySelector(".todo__button");
const input = document.querySelector(".todo__input");
const template = document.querySelector("#template");
const bodyList = document.querySelector(".body__list");
const placeholder = document.querySelector(".list__placeholder");
const doneItem = document.querySelector(".list-item__done");
const deleteItem = document.querySelector(".list-item__delete");
let todos = [];
function localStorageInput() {
    const storageText = localStorage.getItem("inputText");
    if (storageText?.length) {
        input.value = storageText;
    }
    input.addEventListener("input", (e) => {
        localStorage.setItem("inputText", e.target.value);
    });
    button.addEventListener("click", () => {
        localStorage.removeItem("inputText");
    });
}
function addTodo() {
    if (!input.value)
        return;
    postTodoApi();
    renderTodo();
}
function renderTodo() {
    bodyList.innerHTML = "";
    todos.forEach((todo) => {
        cloneAndPrintElements(todo);
    });
    ensurePlaceholder();
}
function ensurePlaceholder() {
    if (todos.length > 0) {
        placeholder.remove();
    }
    else {
        bodyList.appendChild(placeholder);
    }
}
function cloneAndPrintElements(todo) {
    const clone = template.content.cloneNode(true);
    const cloneListItem = clone.querySelector(".template__list-item");
    const cloneTitle = clone.querySelector(".list-item__title");
    const cloneDeleteItem = clone.querySelector(".list-item__delete");
    const cloneDoneItem = clone.querySelector(".list-item__done");
    cloneTitle.textContent = todo.title;
    cloneListItem.classList.toggle("done", todo.done);
    input.value = "";
    cloneDoneItem.addEventListener("click", () => toggleDoneApi(todo.id));
    cloneDeleteItem.addEventListener("click", () => deleteTodoApi(todo.id));
    localStorageInput();
    bodyList.append(cloneListItem);
}
function onDeleteClick(id) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodo();
}
function onDoneClick(todo) {
    todo.done = !todo.done;
    renderTodo();
}
button.addEventListener("click", addTodo);
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && input.value) {
        addTodo();
    }
});
const newUrl = "http://localhost:3001/todos";
async function displayTaskListApi() {
    try {
        const response = await fetch(newUrl);
        const data = await response.json();
        todos.push(...data);
        renderTodo();
    }
    catch (error) {
        console.error("Ошибка:", error);
    }
}
displayTaskListApi();
async function postTodoApi() {
    try {
        const res = await fetch(newUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: input.value,
                done: false,
            }),
        });
        const data = await res.json();
        console.log(data);
        todos.push(data);
        renderTodo();
    }
    catch (error) {
        console.log(error);
    }
}
async function toggleDoneApi(id) {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo)
        return;
    try {
        await fetch(`${newUrl}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ done: !todo.done }),
        });
        onDoneClick(todo);
    }
    catch (error) {
        console.log(error);
    }
}
async function deleteTodoApi(id) {
    try {
        await fetch(`${newUrl}/${id}`, {
            method: "DELETE",
        });
        onDeleteClick(id);
    }
    catch (error) {
        console.log(error);
    }
}
