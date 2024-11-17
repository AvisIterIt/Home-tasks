const button = document.querySelector(".todo__button") as HTMLButtonElement;
const input = document.querySelector(".todo__input") as HTMLInputElement;
const template = document.querySelector("#template") as HTMLTemplateElement;
const bodyList = document.querySelector(".body__list") as HTMLElement;
const placeholder = document.querySelector(".list__placeholder") as HTMLElement;
const doneItem = document.querySelector(".list-item__done") as HTMLElement;
const deleteItem = document.querySelector(".list-item__delete") as HTMLElement;

type Todo = {
    title: string;
    done: boolean;
};

const todos: Todo[] = [];

function addTodo() {
    if (input.value) {
        const newTodo: Todo = { title: input.value, done: false };
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
    } else {
        bodyList.appendChild(placeholder);
    }
}

function cloneAndPrintElements(todo: Todo, index: number) {
    const clone = template.content.cloneNode(true) as DocumentFragment;
    const cloneListItem = clone.querySelector(
        ".template__list-item"
    ) as HTMLElement;
    const cloneTitle = clone.querySelector(".list-item__title") as HTMLElement;
    const cloneDeleteItem = clone.querySelector(
        ".list-item__delete"
    ) as HTMLElement;

    cloneTitle.textContent = todo.title;

    input.value = "";
    onDoneClick(cloneListItem, todo);
    onDeleteClick(cloneDeleteItem, index);

    bodyList.append(cloneListItem);
}

function onDeleteClick(cloneDeleteItem: HTMLElement, index: number) {
    cloneDeleteItem.addEventListener("click", () => {
        todos.splice(index, 1);
        cloneDeleteItem.parentElement?.remove();
        ensurePlaceholder();
    });
}

function onDoneClick(clone: HTMLElement, todo: Todo) {
    const cloneDoneItem = clone.querySelector(
        ".list-item__done"
    ) as HTMLElement;

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
        const newTodo: Todo = {
            title: json.title,
            done: json.completed || false,
        };
        todos.push(newTodo);
        renderTodo();
    });

console.log(todos);
