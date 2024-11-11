"use strict";
// arr
const arrName = ["Артем", "Павел", "Кирилл"];
const arrNumbers = [1, 2, 3, 4, 5];
const arrNumbersTo = [10, 20, 30, 40, 50];
const people = [
    { name: "Артем", age: 15, money: 3000 },
    { name: "Александр", age: 19, money: 2000 },
    { name: "Кирилл", age: 20, money: 1500 },
    { name: "Илья", age: 12, money: 1000 },
];
const countries = [
    "Россия",
    "Австралия",
    "Австрия",
    "Багамы",
    "Венгрия",
    "Гайана",
    "Дания",
    "Кипр",
    "Корея",
    "Турция",
    "Эстония",
    "Япония",
];
// Объекты страницы
const forEachElement = document.querySelector(".div__forEach");
const forEachButton = forEachElement.querySelector(".button");
const mapElement = document.querySelector(".div__map");
const mapButton = mapElement.querySelector(".button");
const filterElement = document.querySelector(".div__filter");
const filterButton = filterElement.querySelector(".button");
const someElement = document.querySelector(".div__some");
const someButton = someElement.querySelector(".button");
const reduceElement = document.querySelector(".div__reduce");
const reduceButton = reduceElement.querySelector(".button");
const findElement = document.querySelector(".div__find");
const findButton = findElement.querySelector(".button");
const findIndexElement = document.querySelector(".div__findIndex");
const findIndexButton = findIndexElement.querySelector(".button");
const everyElement = document.querySelector(".div__every");
const everyButton = everyElement.querySelector(".button");
const sortElement = document.querySelector(".div__sort");
const sortButton = sortElement.querySelector(".button");
const concatElement = document.querySelector(".div__concat");
const concatButton = concatElement.querySelector(".button");
const fillElement = document.querySelector(".div__fill");
const fillButton = fillElement.querySelector(".button");
const reverseElement = document.querySelector(".div__reverse");
const reverseButton = reverseElement.querySelector(".button");
// forEach
// Применяет функцию к каждому элементу массива
// arrName.forEach((elem, id, arr) => {
//     console.log(`Привет ${elem}! Ваш талон ${id}. Список людей: ${arr}`)
// })
const myForEach = (arr, callBack) => {
    for (let i = 0; i < arr.length; i++) {
        callBack(arr[i], i);
    }
};
// map
// Принимает фун-ю возвращает новый массив
const new2 = arrNumbers.map((elem, id, arr) => {
    return elem * 2;
});
const myMap = (arr, callBack) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callBack(arr[i], i));
    }
    return result;
};
// forEach
// 1.возвращает undefined
// 2. forEach нужен для работы с элементами исходного массива
// map
// 1.возвращает новый массив с изменёнными элементами
// 2. map нужен для того чтобы работать с копией массива
// filter
// Принимает фун-ю возвращает новый массив, который был отфильтрован условием
//   console.log("Весь массив");
//   console.log(JSON.stringify(people));
//   const newPeople = people.filter((person) => person.age >= 18);
//   console.log("Условие: старше 18 лет. Результат Filter");
//   console.log(JSON.stringify(newPeople));
const myFilter = (arr, condition) => {
    const newPeople = [];
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i], i)) {
            newPeople.push(arr[i]);
        }
    }
    return newPeople;
};
// some
// вернет значение true, если хотя бы один элемент совпадет с
// проверяемой функцией, и значение false — если нет
// const arr = countries.some((elem) => {
//   return elem === f;
// });
// if (arr === true) {
//   console.log(`В этой стране есть наш филиал`);
// } else {
//   console.log("В этой стране нет нашего филиала");
// }
const mySome = (arr, searchValue) => {
    for (let i = 0; i < arr.length; i++) {
        if (searchValue === arr[i]) {
            return true;
        }
    }
    return false;
};
const user1 = { name: "Артем", age: 18 };
const user2 = { name: "B", age: 10 };
const user3 = { name: "C", age: 11 };
// const x = [user1, user2, user3].some();
// find
// Находит элемент массива
// const firstName = people.find((people) => people.name === "Артем");
// console.log(firstName);
const myFind = (arr, callBack) => {
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
};
// findIndex
// Находит индекс элемента массива
// const firstNameIndex = people.findIndex((people) => people.name === "Кирилл");
// const result = `${people[firstNameIndex].name} в очереди ${
//   firstNameIndex + 1
// }`;
// console.log(result);
const myFindIndex = (arr, callBack) => {
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
};
// every
// Возвращает true если вся коллекция подходит под условие, иначе false
// const arr = people.every((people) => people.money < 3001);
// if (arr === true) {
//   console.log("У всех меньше 3000");
// } else {
//   console.log("У всех больше 3000");
// }
const myEvery = (arr, isValid) => {
    for (let i = 0; i < arr.length; i++) {
        if (!isValid(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
};
// sort
// Сортировка a сравнивается с b
// < 0 => a первый
// === 0 => ничего не меняется
// < 0 => b первый
// const sortedPeople = people.sort((a, b) => a.money - b.money);
// const names = sortedPeople.map((person) => person.name).join(" / ");
// console.log(
//   ` Список людей с количеством наличных по мере возрастания: ${names}`
// );
const mySort = (arr, callBack) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (callBack(arr[j], arr[j + 1])) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
};
// concat
// объединяет два или более массива и возвращает новый массив
// const newArr = arrNumbers.concat(arrNumbersTo);
// console.log(newArr);
const myConcat = (arr, arrTo) => {
    return [...arr, ...arrTo];
};
// fill
// Изменяет исходный массив и возвращает ссылку на него
// Заполняет массив (чем, от включительно, до не включая)
// console.log(`До ${arrNumbers}`);
// const newArr = arrNumbers.fill(0, 0, 4);
// console.log(`После ${newArr}`);
const myFill = (arr, constant, start, end) => {
    const validStart = Math.max(0, start);
    const validEnd = Math.min(arr.length, end);
    for (let i = validStart; i < validEnd - 1; i++) {
        arr[i] = constant;
    }
    console.log(arr);
};
// reverse
// меняет порядок следования элементов в массиве на обратный
// console.log(`До ${arrNumbers}`);
//arrNumbers.reverse();
// console.log(`После ${newArr}`);
const myReverse = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr.push(arr[i]);
    }
    return arr;
};
// challenge
forEachButton.addEventListener("click", () => {
    myForEach(arrName, (elem, index) => {
        console.log(`Привет ${elem}! Ваш талон ${index}.`);
    });
});
mapButton.addEventListener("click", () => {
    const newArray = myMap(arrNumbers, (elem, i) => {
        return elem * 2;
    });
});
filterButton.addEventListener("click", () => {
    myFilter(people, (user) => user.age <= 18);
});
someButton.addEventListener("click", () => {
    mySome(countries, "Россия");
});
findButton.addEventListener("click", () => {
    const foundUser = myFind(people, (user) => user.age === 20);
    if (foundUser) {
        console.log("Найден пользователь:", foundUser);
    }
    else {
        console.log("Пользователь с возрастом 20 не найден.");
    }
});
findIndexButton.addEventListener("click", () => {
    const index = myFindIndex(people, (elem, id, arr) => {
        return elem.name === "Кирилл";
    });
    if (index !== undefined) {
        console.log(index);
    }
    else {
        console.log("Элемент не найден.");
    }
});
everyButton.addEventListener("click", () => {
    myEvery(people, (user) => user.money > 3000);
});
sortButton.addEventListener("click", () => {
    mySort(people, (a, b) => a.money - b.money);
});
concatButton.addEventListener("click", () => {
    myConcat(arrNumbers, arrNumbersTo);
});
fillButton.addEventListener("click", () => {
    myFill(arrNumbers, 0, 0, 5);
});
reverseButton.addEventListener("click", () => {
    myReverse(arrNumbers);
});
