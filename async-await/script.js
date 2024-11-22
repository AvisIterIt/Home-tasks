"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function fetchAsyncTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield delay(2000);
            const response = yield fetch(url);
            const data = yield response.json();
            console.log(data);
        }
        catch (e) {
            console.log(e);
        }
        finally {
            console.log("finally");
        }
    });
}
fetchAsyncTodos();
