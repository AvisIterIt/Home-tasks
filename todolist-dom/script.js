"use strict";
const button = document.querySelector(".todo__button");
const input = document.querySelector(".todo__input");
const template = document.querySelector("#template");
const bodyList = document.querySelector(".body__list");
const placeholder = document.querySelector(".list__greetings");
const doneItem = document.querySelector(".list__done");
const deleteItem = document.querySelector(".list__delete");
const todos = [{ title: "", done: false }];
// Надпись "Список дел пока пуст"
function ensurePlaceholder() {
    if (todos.length > 0) {
        placeholder.remove();
    }
    else {
        bodyList.appendChild(placeholder);
    }
}
function cloneAndPrintElements() {
    const clone = template.content.cloneNode(true);
    const cloneListItem = clone.querySelector(".list__item");
    const cloneTitle = clone.querySelector(".list__title");
    const cloneDeleteItem = clone.querySelector(".list__delete");
    cloneTitle.textContent = input.value;
    input.value = "";
    onDoneClick(cloneListItem);
    onDeleteClick(cloneDeleteItem);
    bodyList.append(cloneListItem);
}
function onDeleteClick(cloneDeleteItem) {
    cloneDeleteItem.addEventListener("click", () => {
        var _a;
        (_a = cloneDeleteItem.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
        ensurePlaceholder();
    });
}
function onDoneClick(clone) {
    const cloneDoneItem = clone.querySelector(".list__done");
    cloneDoneItem.addEventListener("click", () => {
        clone.classList.toggle("done");
        if (clone.classList.contains("done")) {
            cloneDoneItem.src = "./icon/check-black.png";
        }
        else if (!clone.classList.contains("done")) {
            cloneDoneItem.src = "./icon/check-green.png";
        }
    });
}
// Добавление элементов
// '', null, undefined
button.addEventListener("click", () => {
    if (input.value) {
        ensurePlaceholder();
        cloneAndPrintElements();
    }
});
// ввод по нажатию клавиши Enter
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && input.value) {
        ensurePlaceholder();
        cloneAndPrintElements();
    }
});
