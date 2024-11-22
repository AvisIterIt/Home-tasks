// LocalStorage - локальное хранилище, может работать только со строками
const number: number = 55;
// Параметр ключ,значение (Key,Value)
const result2 = localStorage.setItem("number", number.toString());
// Параметр ключ key
const result = localStorage.getItem("number");
const removeResult = localStorage.removeItem("number");
console.log(result);

const obj = {
    name: "Artem",
    age: 23,
};
// сохраняем в localStorage obj в виде строки, иначе сохраниться [object Object]
localStorage.setItem("person", JSON.stringify(obj));

const raw = localStorage.getItem("person");
if (raw !== null) {
    // Переводим в объект и проводим манипуляции
    const person = JSON.parse(raw);
    person.name = "Alex";
    console.log(person);
}
console.log(raw);
