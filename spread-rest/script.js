"use strict";
const citiesRussia = [
    "Москва",
    "Санкт-Петербург",
    "Краснодар",
    "Новосибирск",
    "Екатеринбург",
];
const citiesUsa = [
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
console.log(...citiesRussia);
console.log(citiesRussia[0], citiesRussia[1], citiesRussia[2], citiesRussia[3], citiesRussia[4]);
console.log(...citiesUsa);
// Конкотенация массивов + добавление новых значений в него
const allCity = [...citiesRussia, "Камызяк", ...citiesUsa];
console.log(allCity);
// Работа с объектами
// не можем использовать такой же синтаксис с объектами что и с массивами например
//  console.log(...numberPeopleInTheCiryRussia); т.к. появится ошибка найден невызываемый итератор
console.log({ ...numberPeopleInTheCirysRussia });
// Объединение объектов
const allCityObj = {
    ...numberPeopleInTheCirysRussia,
    Камызяк: 1,
    ...numberPeopleInTheCirysUsa,
};
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
const { newName, age, ...rest } = newPeople;
console.log(newName, age, rest);
