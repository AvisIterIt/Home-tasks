"use strict";
const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
delay(2000).then(() => console.log("2 sec"));
const url = "https://jsonplaceholder.typicode.com/todos";
// function fetchTodo() {
//     return delay(2000)
//         .then(() => fetch(url))
//         .then((response) => response.json());
// }
// fetchTodo()
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
async function fetchAsyncTodos() {
    try {
        await delay(2000);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
    catch (e) {
        console.log(e);
    }
    finally {
        console.log("finally");
    }
}
fetchAsyncTodos();
