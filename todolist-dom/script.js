"use strict";
const button = document.querySelector(".todo__button");
const input = document.querySelector(".todo__input");
const template = document.querySelector("#template");
const bodyList = document.querySelector(".body__list");
const greetings = document.querySelector(".list__greetings");
const doneItem = document.querySelector(".list__done");
const deleteItem = document.querySelector(".list__delete");
// Надпись "Список дел пока пуст"
function greetingsElement() {
    if (bodyList.contains(greetings)) {
        greetings.remove();
    }
}
// Клонирование и вывод элементов
function itemElement() {
    const clone = template.content.cloneNode(true);
    const cloneTitle = clone.querySelector(".list__title");
    const cloneDeleteItem = clone.querySelector(".list__delete");
    const cloneDoneItem = clone.querySelector(".list__done");
    cloneTitle.textContent = input.value;
    bodyList.append(clone);
    input.value = "";
    deleteElement(cloneDeleteItem);
    doneElement(cloneDoneItem, cloneTitle);
}
// Удаление элементов
function deleteElement(cloneDeleteItem) {
    if (cloneDeleteItem) {
        cloneDeleteItem.addEventListener("click", () => {
            var _a;
            (_a = cloneDeleteItem.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
            greetingsElement();
        });
    }
}
// Выполнение элементов
function doneElement(cloneDoneItem, cloneTitle) {
    if (cloneDoneItem) {
        cloneDoneItem.addEventListener("click", () => {
            cloneTitle.classList.toggle("line-through");
            if (cloneTitle.classList.contains("line-through")) {
                cloneDoneItem.src =
                    "./icon/check-black.png";
            }
            else if (!cloneTitle.classList.contains("line-through")) {
                cloneDoneItem.src =
                    "./icon/check-green.png";
            }
        });
    }
}
// Добавление элементов
button.addEventListener("click", () => {
    if (input.value !== "") {
        greetingsElement();
        itemElement();
    }
});
// ввод по нажатию клавиши Enter
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && input.value !== "") {
        greetingsElement();
        itemElement();
    }
});
// При загрузки страницы выбран input
document.addEventListener("DOMContentLoaded", () => {
    input.focus();
});
