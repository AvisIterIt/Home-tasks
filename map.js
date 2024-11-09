"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arr = ["Aaaa", "Bbbbbb", "Cc"];
const newArray = arr.map((x) => x.length > 3); // [4, 6, 2]
console.log(newArray);
