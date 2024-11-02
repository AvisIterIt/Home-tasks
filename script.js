// arr
var arrName = ["Артем", "Павел", "Кирилл"];
var arrNumbers = [1, 2, 3, 4, 5];
var arrNumbersTo = [10, 20, 30, 40, 50];
var people = [
    { name: "Артем", age: 15, money: 3000 },
    { name: "Александр", age: 19, money: 2000 },
    { name: "Кирилл", age: 20, money: 1500 },
    { name: "Илья", age: 12, money: 1000 },
];
var countries = [
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
var forEachElement = document.querySelector(".div__forEach");
var forEachButton = forEachElement.querySelector(".button");
var mapElement = document.querySelector(".div__map");
var mapButton = mapElement.querySelector(".button");
var filterElement = document.querySelector(".div__filter");
var filterButton = filterElement.querySelector(".button");
var someElement = document.querySelector(".div__some");
var someButton = someElement.querySelector(".button");
var reduceElement = document.querySelector(".div__reduce");
var reduceButton = reduceElement.querySelector(".button");
var findElement = document.querySelector(".div__find");
var findButton = findElement.querySelector(".button");
var findIndexElement = document.querySelector(".div__findIndex");
var findIndexButton = findIndexElement.querySelector(".button");
var everyElement = document.querySelector(".div__every");
var everyButton = everyElement.querySelector(".button");
var sortElement = document.querySelector(".div__sort");
var sortButton = sortElement.querySelector(".button");
var concatElement = document.querySelector(".div__concat");
var concatButton = concatElement.querySelector(".button");
var fillElement = document.querySelector(".div__fill");
var fillButton = fillElement.querySelector(".button");
var reverseElement = document.querySelector(".div__reverse");
var reverseButton = reverseElement.querySelector(".button");
// forEach
// Применяет функцию к каждому элементу массива
// arrName.forEach((elem, id, arr) => {
//     console.log(`Привет ${elem}! Ваш талон ${id}. Список людей: ${arr}`)
// })
var myForEach = function (arr, callBack) {
    for (var i = 0; i < arr.length; i++) {
        callBack(arr[i], i, arr);
    }
};
// map
// Принимает фун-ю возвращает новый массив
//   arrNumbers.map((elem, id, arr) => {
//     console.log(`${elem} * 2 = ${elem * 2}`);
//   });
var myMup = function (arr, callBack) {
    for (var i = 0; i < arr.length; i++) {
        callBack(arr[i], i, arr);
    }
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
var myFilter = function (arr, condition) {
    var newPeople = [];
    for (var i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
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
var mySome = function (arr) {
    var f = prompt("Узнайте в каких странах находятся наши филиалы.", "");
    var found = false;
    for (var i = 0; i < arr.length; i++) {
        if (f === arr[i]) {
            found = true;
            break;
        }
    }
    if (found) {
        console.log("\u0412 \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0435 \u0435\u0441\u0442\u044C \u043D\u0430\u0448 \u0444\u0438\u043B\u0438\u0430\u043B");
    }
    else {
        console.log("В этой стране нет нашего филиала");
    }
};
// Reduce
// total - изначальное значение 0 / аккумулятор
// people - итерируемый элемент массива
// console.log(`В компании ${people.length} человека`);
// const summa = people.reduce((total, people) => total + people.money, 0);
// console.log(`Общий бюджет ${summa}`);
var myReduce = function (arr, callBack) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += callBack(total, arr[i]);
    }
    return total;
};
// find
// Находит элемент массива
// const firstName = people.find((people) => people.name === "Артем");
// console.log(firstName);
var myFind = function (arr, callBack) {
    for (var i = 0; i < arr.length; i++) {
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
var myFindIndex = function (arr, callBack) {
    for (var i = 0; i < arr.length; i++) {
        if (callBack(arr[i], i, arr)) {
            return i;
        }
    }
    return undefined;
};
// every
// Возвращает true если вся подходят под условие, иначе false
// const arr = people.every((people) => people.money < 3001);
// if (arr === true) {
//   console.log("У всех меньше 3000");
// } else {
//   console.log("У всех больше 3000");
// }
var MyEvery = function (arr, callBack) {
    var found = true;
    for (var i = 0; i < arr.length; i++) {
        if (!callBack(arr[i], i, arr)) {
            found = false;
            break;
        }
    }
    if (found) {
        console.log("У кого меньше 3000?");
    }
    else {
        console.log("У кого больше 3000?");
    }
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
var mySort = function (arr, callBack) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (callBack(arr[j], arr[j + 1])) {
                var temp = arr[j];
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
var myConcat = function (arr, arrTo, callBack) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    for (var i = 0; i < arrTo.length; i++) {
        newArr.push(arrTo[i]);
    }
    console.log(newArr);
};
// fill
// Изменяет исходный массив и возвращает ссылку на него
// Заполняет массив (чем, от включительно, до не включая)
// console.log(`До ${arrNumbers}`);
// const newArr = arrNumbers.fill(0, 0, 4);
// console.log(`После ${newArr}`);
var myFill = function (arr, constant, start, end) {
    var validStart = Math.max(0, start);
    var validEnd = Math.min(arr.length, end);
    for (var i = validStart; i < validEnd - 1; i++) {
        arr[i] = constant;
    }
    console.log(arr);
};
// reverse
// меняет порядок следования элементов в массиве на обратный
// console.log(`До ${arrNumbers}`);
// const newArr = arrNumbers.reverse();
// console.log(`После ${newArr}`);
var myReverse = function (arr) {
    var newArr = [];
    for (var i = arr.length; i > 0; i--) {
        newArr.push(arr[i - 1]);
    }
    console.log(newArr);
};
// challenge
forEachButton.addEventListener("click", function () {
    myForEach(arrName, function (elem, id, arr) {
        console.log("\u041F\u0440\u0438\u0432\u0435\u0442 ".concat(elem, "! \u0412\u0430\u0448 \u0442\u0430\u043B\u043E\u043D ").concat(id, ". \u0421\u043F\u0438\u0441\u043E\u043A \u043B\u044E\u0434\u0435\u0439: ").concat(arr));
    });
});
mapButton.addEventListener("click", function () {
    var newArrNumbers = [];
    myMup(arrNumbers, function (elem, i, arr) {
        newArrNumbers.push(arr[i]);
        console.log("".concat(newArrNumbers[i], " * 2 = ").concat(newArrNumbers[i] * 2));
        return newArrNumbers[i] * 2;
    });
});
filterButton.addEventListener("click", function () {
    myFilter(people, function (user) { return user.age <= 18; });
});
someButton.addEventListener("click", function () {
    mySome(countries);
});
reduceButton.addEventListener("click", function () {
    myReduce(people, function (total, person) { return total + person.money; });
});
findButton.addEventListener("click", function () {
    var foundUser = myFind(people, function (user) { return user.age === 20; });
    if (foundUser) {
        console.log("Найден пользователь:", foundUser);
    }
    else {
        console.log("Пользователь с возрастом 20 не найден.");
    }
});
findIndexButton.addEventListener("click", function () {
    var index = myFindIndex(people, function (elem, id, arr) {
        return elem.name === "Кирилл";
    });
    if (index !== undefined) {
        console.log(index);
    }
    else {
        console.log("Элемент не найден.");
    }
});
everyButton.addEventListener("click", function () {
    MyEvery(people, function (user) { return user.money > 3000; });
});
sortButton.addEventListener("click", function () {
    mySort(people, function (a, b) { return a.money - b.money; });
});
concatButton.addEventListener("click", function () {
    myConcat(arrNumbers, arrNumbersTo, function (a, b) { return a + b; });
});
fillButton.addEventListener("click", function () {
    myFill(arrNumbers, 0, 0, 5);
});
reverseButton.addEventListener("click", function () {
    myReverse(arrNumbers);
});
