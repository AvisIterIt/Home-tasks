const button = document.querySelector(".todo__button") as HTMLButtonElement;
const input = document.querySelector(".todo__input") as HTMLInputElement;
const template = document.querySelector("#template") as HTMLTemplateElement;
const bodyList = document.querySelector(".body__list") as HTMLElement;
const placeholder = document.querySelector(".list__placeholder") as HTMLElement;
const doneItem = document.querySelector(".list-item__done") as HTMLElement;
const deleteItem = document.querySelector(".list-item__delete") as HTMLElement;

type Todo = {
    id: number;
    title: string;
    done: boolean;
};

let todos: Todo[] = [];

function localStorageInput() {
    const storageText = localStorage.getItem("inputText");
    if (storageText?.length) {
        input.value = storageText;
    }

    input.addEventListener("input", (e) => {
        localStorage.setItem("inputText", (e.target as HTMLInputElement).value);
    });
    button.addEventListener("click", () => {
        localStorage.removeItem("inputText");
    });
}

function addTodo() {
    if (!input.value) return;
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
    } else {
        bodyList.appendChild(placeholder);
    }
}

function cloneAndPrintElements(todo: Todo) {
    const clone = template.content.cloneNode(true) as DocumentFragment;
    const cloneListItem = clone.querySelector(
        ".template__list-item"
    ) as HTMLElement;
    const cloneTitle = clone.querySelector(".list-item__title") as HTMLElement;
    const cloneDeleteItem = clone.querySelector(
        ".list-item__delete"
    ) as HTMLElement;
    const cloneDoneItem = clone.querySelector(
        ".list-item__done"
    ) as HTMLElement;

    cloneTitle.textContent = todo.title;

    cloneListItem.classList.toggle("done", todo.done);

    input.value = "";
    cloneDoneItem.addEventListener("click", () => toggleDoneApi(todo.id));
    cloneDeleteItem.addEventListener("click", () => deleteTodoApi(todo.id));
    localStorageInput();
    bodyList.append(cloneListItem);
}

function onDeleteClick(id: number) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodo();
}

function onDoneClick(todo: Todo) {
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
    } catch (error) {
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

        todos.push(data);
        renderTodo();
    } catch (error) {
        console.log(error);
    }
}

async function toggleDoneApi(id: number) {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;

    try {
        await fetch(`${newUrl}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ done: !todo.done }),
        });
        onDoneClick(todo);
    } catch (error) {
        console.log(error);
    }
}

async function deleteTodoApi(id: number) {
    try {
        await fetch(`${newUrl}/${id}`, {
            method: "DELETE",
        });
        onDeleteClick(id);
    } catch (error) {
        console.log(error);
    }
}
