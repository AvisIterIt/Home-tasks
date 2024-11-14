// arr

const arrName: string[] = ["Артем", "Павел", "Кирилл"];
const arrNumbers: number[] = [1, 2, 3, 4, 5];
const arrNumbersTo: number[] = [10, 20, 30, 40, 50];
const people: User[] = [
    { name: "Артем", age: 15, money: 3000 },
    { name: "Александр", age: 19, money: 2000 },
    { name: "Кирилл", age: 20, money: 1500 },
    { name: "Илья", age: 12, money: 1000 },
];

type User = {
    name: string;
    age: number;
    money: number;
};

const countries: string[] = [
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

const forEachElement = document.querySelector(".div__forEach")!;
const forEachButton = forEachElement.querySelector(".button")!;
const mapElement = document.querySelector(".div__map")!;
const mapButton = mapElement.querySelector(".button")!;
const filterElement = document.querySelector(".div__filter")!;
const filterButton = filterElement.querySelector(".button")!;
const someElement = document.querySelector(".div__some")!;
const someButton = someElement.querySelector(".button")!;
const reduceElement = document.querySelector(".div__reduce")!;
const reduceButton = reduceElement.querySelector(".button")!;
const findElement = document.querySelector(".div__find")!;
const findButton = findElement.querySelector(".button")!;
const findIndexElement = document.querySelector(".div__findIndex")!;
const findIndexButton = findIndexElement.querySelector(".button")!;
const everyElement = document.querySelector(".div__every")!;
const everyButton = everyElement.querySelector(".button")!;
const sortElement = document.querySelector(".div__sort")!;
const sortButton = sortElement.querySelector(".button")!;
const concatElement = document.querySelector(".div__concat")!;
const concatButton = concatElement.querySelector(".button")!;
const fillElement = document.querySelector(".div__fill")!;
const fillButton = fillElement.querySelector(".button")!;
const reverseElement = document.querySelector(".div__reverse")!;
const reverseButton = reverseElement.querySelector(".button")!;

// forEach

// Применяет функцию к каждому элементу массива
// arrName.forEach((elem,index, arr) => {
//     console.log(`Привет ${elem}! Ваш талон ${id}. Список людей: ${arr}`)
// })

const myForEach = <T>(
    arr: T[],
    callBack: (elem: T, index: number) => void
): void => {
    for (let i = 0; i < arr.length; i++) {
        callBack(arr[i], i);
    }
};

// map

// Принимает фун-ю возвращает новый массив

// const new2 = arrNumbers.map((elem, index, arr) => {
//     return elem * 2;
// });

const myMap = <T>(
    arr: T[],
    callBack: (elem: T, index: number) => number
): number[] => {
    const result: number[] = [];
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

const myFilter = <T>(
    arr: T[],
    condition: (user: T, index: number) => boolean
): T[] => {
    const newPeople: T[] = [];

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

const mySome = <T>(
    arr: T[],
    callBack: (elem: T, index: number, arr: T[]) => boolean
): boolean => {
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i], i, arr)) {
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

const myFind = <T>(
    arr: T[],
    callBack: (elem: T, index: number, arr: T[]) => boolean
): T | undefined => {
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

const myFindIndex = <T>(
    arr: T[],
    callBack: (elem: T, index: number, arr: T[]) => boolean
): number => {
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
};

// lastIndexOf

const myFindIndexOf = (
    arr: number[],
    callBack: (searchElement: number, fromIndex: number) => boolean
): number => {
    for (let i = arr.length - 1; i > 0; i--) {
        if (callBack(arr[i], i)) {
            return i;
        }
    }
    return -1;
};

//console.log(myFindIndexOf(arrNumbers, (num) => num === 2));

// splice
// изменяет массив, удаляя определённое количество элементов и/или добавляя новые элементы,
//начиная с указанного индекса
// возвращает вырезанные элементы
// изменяет исходный массив
// параметры (с какого index-а начинать; количество элементов, которые нужно вырезать; элементы, которые нужно добавить)
// Добавление элементов происходит в место, где были вырезаны предыдущие элементы или в начало массива
// console.log(arrNumbers);
// const f = arrNumbers.splice(0, 0, 55);
// console.log(f);
// console.log(arrNumbers);

const mySplice = <T>(
    arr: T[],
    start: number,
    quantity: number,
    ...items: T[]
) => {
    const removedElements: T[] = [];
    const resultArray: T[] = [];

    // Корректируем значение `start`, если оно отрицательное
    start = start < 0 ? arr.length + start : start;
    if (start > arr.length) start = arr.length;

    // Скопируем элементы до `start` в результат
    for (let i = 0; i < start; i++) {
        resultArray.push(arr[i]);
    }

    // Удалим `quantity` элементов, начиная с `start`, и сохраним их в `removedElements`
    for (let i = start; i < start + quantity && i < arr.length; i++) {
        removedElements.push(arr[i]);
    }

    // Добавим новые элементы в результат
    for (let i = 0; i < items.length; i++) {
        resultArray.push(items[i]);
    }

    // Добавим оставшиеся элементы массива после `start + quantity`
    for (let i = start + quantity; i < arr.length; i++) {
        resultArray.push(arr[i]);
    }

    // Перезаписываем исходный массив
    arr.length = resultArray.length;
    for (let i = 0; i < resultArray.length; i++) {
        arr[i] = resultArray[i];
    }

    return removedElements;
};

// slice

// Возвращает новый массив, копируя указанный диапазон элементов исходного массива

const mySlice = <T>(arr: T[], start: number, end: number): T[] => {
    const newArrSplice: T[] = [];
    for (let i = start; i < end; i++) {
        newArrSplice.push(arr[i]);
    }
    return newArrSplice;
};

//console.log(mySlice(arrNumbers, 1, 3));

const myLastIndexOf = <T>(
    arr: T[],
    callBack: (elem: T, index: number, arr: T[]) => boolean
): number => {
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

const myEvery = <T>(
    arr: T[],
    isValid: (elem: T, index: number, arr: T[]) => boolean
): boolean => {
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

const mySort = <T>(arr: T[], callBack: (a: T, b: T) => number): void => {
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

const myConcat = <T>(arr: T[], arrTo: T[]): T[] => {
    return [...arr, ...arrTo];
};

// fill
// Изменяет исходный массив и возвращает ссылку на него
// Заполняет массив (чем, от включительно, до не включая)

// console.log(`До ${arrNumbers}`);
// const newArr = arrNumbers.fill(0, 0, 4);
// console.log(`После ${newArr}`);

const myFill = <T>(arr: T[], constant: T, start: number, end: number): void => {
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

const myReverse = <T>(arr: T[]): T[] => {
    const reversedArr: T[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
};

// challenge

forEachButton.addEventListener("click", () => {
    myForEach(arrName, (elem: string, index: number) => {
        console.log(`Привет ${elem}! Ваш талон ${index}.`);
    });
});

mapButton.addEventListener("click", () => {
    const newArray = myMap(arrNumbers, (elem: number, i: number) => {
        return elem * 2;
    });
    console.log(newArray);
});
filterButton.addEventListener("click", () => {
    console.log(myFilter(people, (user: User) => user.age <= 18));
});
someButton.addEventListener("click", () => {
    console.log(mySome(people, (user: User) => user.age <= 18));
});
findButton.addEventListener("click", () => {
    const foundUser = myFind(people, (user: User) => user.age === 20);

    if (foundUser) {
        console.log("Найден пользователь:", foundUser);
    } else {
        console.log("Пользователь с возрастом 20 не найден.");
    }
});
findIndexButton.addEventListener("click", () => {
    const index = myFindIndex(people, (elem, index, arr) => {
        return elem.name === "Кирилл";
    });

    if (index !== undefined) {
        console.log(index);
    } else {
        console.log("Элемент не найден.");
    }
});
everyButton.addEventListener("click", () => {
    myEvery(people, (user: User) => user.money > 3000);
});
sortButton.addEventListener("click", () => {
    mySort(people, (a: User, b: User) => a.money - b.money);
});
concatButton.addEventListener("click", () => {
    myConcat(arrNumbers, arrNumbersTo);
});
fillButton.addEventListener("click", () => {
    myFill(arrNumbers, 0, 0, 5);
});
reverseButton.addEventListener("click", () => {
    console.log(myReverse(arrNumbers));
});
