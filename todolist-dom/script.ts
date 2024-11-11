const button = document.querySelector(".todo__button") as HTMLButtonElement;
const input = document.querySelector(".todo__input") as HTMLInputElement;
const template = document.querySelector("#template") as HTMLTemplateElement;
const bodyList = document.querySelector(".body__list") as HTMLElement;
const placeholder = document.querySelector(".list__greetings") as HTMLElement;
const doneItem = document.querySelector(".list__done") as HTMLElement;
const deleteItem = document.querySelector(".list__delete") as HTMLElement;

type Todo = {
    title: string;
    done: boolean;
};

const todos: Todo[] = [{ title: "", done: false }];

// Надпись "Список дел пока пуст"

function ensurePlaceholder() {
    if (todos.length > 0) {
        placeholder.remove();
    } else {
        bodyList.appendChild(placeholder);
    }
}

function cloneAndPrintElements() {
    const clone = template.content.cloneNode(true) as DocumentFragment;
    const cloneListItem = clone.querySelector(".list__item") as HTMLElement;
    const cloneTitle = clone.querySelector(".list__title") as HTMLElement;
    const cloneDeleteItem = clone.querySelector(".list__delete") as HTMLElement;

    cloneTitle.textContent = input.value;

    input.value = "";
    onDoneClick(cloneListItem);
    onDeleteClick(cloneDeleteItem);

    bodyList.append(cloneListItem);
}

function onDeleteClick(cloneDeleteItem: HTMLElement) {
    cloneDeleteItem.addEventListener("click", () => {
        cloneDeleteItem.parentElement?.remove();
        ensurePlaceholder();
    });
}

function onDoneClick(clone: HTMLElement) {
    const cloneDoneItem = clone.querySelector(
        ".list__done"
    ) as HTMLImageElement;

    cloneDoneItem.addEventListener("click", () => {
        clone.classList.toggle("done");

        if (clone.classList.contains("done")) {
            cloneDoneItem.src = "./icon/check-black.png";
        } else if (!clone.classList.contains("done")) {
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
