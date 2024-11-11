"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const citysRussia = [
    "Москва",
    "Санкт-Петербург",
    "Краснодар",
    "Новосибирск",
    "Екатеринбург",
];
const citysUsa = [
    "Нью-Йорк",
    "Вашингтон",
    "Лос-Анджелес",
    "Сан-Диего",
    "Сан-Франциско",
];
const numberPeopleInTheCirysRussia = {
    Moscow: 10,
    Piter: 20,
    Krasnodar: 30,
    Novosibirsk: 40,
    Ekaterinburg: 50,
};
const numberPeopleInTheCirysUsa = {
    "New york": 10,
    Washington: 20,
    "Los Angeles": 30,
    "San Diego": 40,
    "San Francisco": 50,
};
// Spread
// Разворачивает массив, т.е. превращает в набор данных, извлекает из массива данные
console.log(...citysRussia);
console.log(...citysUsa);
// Конкотенация массивов + добавление новых значений в него
const allCity = [...citysRussia, "Камызяк", ...citysUsa];
console.log(allCity);
// Работа с объектами
// не можем использовать такой же синтаксис с объектами что и с массивами например
//  console.log(...numberPeopleInTheCiryRussia); т.к. появится ошибка найден невызываемый итератор
console.log(Object.assign({}, numberPeopleInTheCirysRussia));
// Объединение объектов
const allCityObj = Object.assign(Object.assign(Object.assign({}, numberPeopleInTheCirysRussia), { Камызяк: 1 }), numberPeopleInTheCirysUsa);
console.log(allCityObj);
// rest
function sum(a, b, ...other) {
    return a + b + other.reduce((a, b) => a + b, 0);
}
const numbers = [1, 2, 3, 4, 5];
// console.log(sum(...numbers));
// Деструктуризация массива + rest собирает в новый массив оставшиеся данные
const [a, b, ...other] = numbers;
console.log(a, b, other);
// Деструктуризация объекта + rest собирает в новый объект оставшиеся данные
const newPeople = {
    newName: "John",
    age: 30,
    city: "New York",
    country: "USA",
    money: 1000,
};
const { newName, age } = newPeople, rest = __rest(newPeople, ["newName", "age"]);
console.log(newName, age, rest);
