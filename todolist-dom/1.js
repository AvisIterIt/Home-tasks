"use strict";
const newUrl = "http://localhost:3001/todos";
debugger;
console.log(1); // sync
f();
console.log(3); // sync
// ... sync code
async function f() {
    console.log(2); // sync
    const response = await fetch(newUrl);
    console.log(4);
}
// export {};
