const button = document.querySelector(".todo__button") as HTMLButtonElement;
const input = document.querySelector(".todo__input") as HTMLInputElement;
const template = document.querySelector("#template") as HTMLTemplateElement;
const bodyList = document.querySelector(".body__list") as HTMLElement;
const greetings = document.querySelector(".list__greetings") as HTMLElement;
const doneItem = document.querySelector(".list__done") as HTMLElement;
const deleteItem = document.querySelector(".list__delete") as HTMLElement;

// Надпись "Список дел пока пуст"

function greetingsElement() {
    if (bodyList.contains(greetings)) {
        greetings.remove();
    }
}

// Клонирование и вывод элементов

function itemElement() {
    const clone = template.content.cloneNode(true) as DocumentFragment;
    const cloneTitle = clone.querySelector(".list__title") as HTMLElement;
    const cloneDeleteItem = clone.querySelector(".list__delete") as HTMLElement;
    const cloneDoneItem = clone.querySelector(".list__done") as HTMLElement;
    cloneTitle.textContent = input.value;
    bodyList.append(clone);

    input.value = "";
    deleteElement(cloneDeleteItem);
    doneElement(cloneDoneItem, cloneTitle);
}

// Удаление элементов

function deleteElement(cloneDeleteItem: HTMLElement) {
    if (cloneDeleteItem) {
        cloneDeleteItem.addEventListener("click", () => {
            cloneDeleteItem.parentElement?.remove();
            greetingsElement();
        });
    }
}

// Выполнение элементов

function doneElement(cloneDoneItem: HTMLElement, cloneTitle: HTMLElement) {
    if (cloneDoneItem) {
        cloneDoneItem.addEventListener("click", () => {
            cloneTitle.classList.toggle("line-through");
            if (cloneTitle.classList.contains("line-through")) {
                (cloneDoneItem as HTMLImageElement).src =
                    "./icon/check-black.png";
            } else if (!cloneTitle.classList.contains("line-through")) {
                (cloneDoneItem as HTMLImageElement).src =
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
