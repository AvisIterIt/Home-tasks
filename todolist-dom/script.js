"use strict";
const button = document.querySelector(".todo__button");
const input = document.querySelector(".todo__input");
const template = document.querySelector("#template");
const bodyList = document.querySelector(".body__list");
const placeholder = document.querySelector(".list__placeholder");
const doneItem = document.querySelector(".list-item__done");
const deleteItem = document.querySelector(".list-item__delete");
const todos = [];
function addTodo() {
    if (input.value) {
        const newTodo = { title: input.value, done: false };
        todos.push(newTodo);
        input.value = "";
        ensurePlaceholder();
        renderTodo();
    }
}
function renderTodo() {
    bodyList.innerHTML = "";
    todos.forEach((todo, index) => {
        cloneAndPrintElements(todo, index);
    });
}
function ensurePlaceholder() {
    if (todos.length > 0) {
        placeholder.remove();
    }
    else {
        bodyList.appendChild(placeholder);
    }
}
function cloneAndPrintElements(todo, index) {
    const clone = template.content.cloneNode(true);
    const cloneListItem = clone.querySelector(".template__list-item");
    const cloneTitle = clone.querySelector(".list-item__title");
    const cloneDeleteItem = clone.querySelector(".list-item__delete");
    cloneTitle.textContent = todo.title;
    input.value = "";
    onDoneClick(cloneListItem, todo);
    onDeleteClick(cloneDeleteItem, index);
    bodyList.append(cloneListItem);
}
function onDeleteClick(cloneDeleteItem, index) {
    cloneDeleteItem.addEventListener("click", () => {
        var _a;
        todos.splice(index, 1);
        (_a = cloneDeleteItem.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
        ensurePlaceholder();
    });
}
function onDoneClick(clone, todo) {
    const cloneDoneItem = clone.querySelector(".list-item__done");
    cloneDoneItem.addEventListener("click", () => {
        todo.done = !todo.done;
        clone.classList.toggle("done", todo.done);
    });
}
button.addEventListener("click", addTodo);
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && input.value) {
        addTodo();
    }
});
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => {
    const newTodo = {
        title: json.title,
        done: json.completed || false,
    };
    todos.push(newTodo);
    renderTodo();
});
console.log(todos);
