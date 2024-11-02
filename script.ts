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
// arrName.forEach((elem, id, arr) => {
//     console.log(`Привет ${elem}! Ваш талон ${id}. Список людей: ${arr}`)
// })

const myForEach = (
  arr: string[],
  callBack: (elem: string, id: number, arr: string[]) => void
): void => {
  for (let i = 0; i < arr.length; i++) {
    callBack(arr[i], i, arr);
  }
};

// map

// Принимает фун-ю возвращает новый массив

//   arrNumbers.map((elem, id, arr) => {
//     console.log(`${elem} * 2 = ${elem * 2}`);
//   });

const myMup = (
  arr: number[],
  callBack: (elem: number, id: number, arr: number[]) => number
): void => {
  for (let i = 0; i < arr.length; i++) {
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

const myFilter = (arr: User[], condition: (user: User) => boolean): User[] => {
  let newPeople: User[] = [];
  for (let i = 0; i < arr.length; i++) {
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

const mySome = (arr: string[]): void => {
  const f = prompt("Узнайте в каких странах находятся наши филиалы.", "");
  let found: boolean = false;
  for (let i = 0; i < arr.length; i++) {
    if (f === arr[i]) {
      found = true;
      break;
    }
  }
  if (found) {
    console.log(`В этой стране есть наш филиал`);
  } else {
    console.log("В этой стране нет нашего филиала");
  }
};

// Reduce

// total - изначальное значение 0 / аккумулятор
// people - итерируемый элемент массива

// console.log(`В компании ${people.length} человека`);
// const summa = people.reduce((total, people) => total + people.money, 0);
// console.log(`Общий бюджет ${summa}`);

const myReduce = (
  arr: User[],
  callBack: (total: number, people: User) => number
): number => {
  let total: number = 0;
  for (let i = 0; i < arr.length; i++) {
    total += callBack(total, arr[i]);
  }
  return total;
};

// find

// Находит элемент массива

// const firstName = people.find((people) => people.name === "Артем");
// console.log(firstName);

const myFind = (
  arr: User[],
  callBack: (elem: User, id: number, arr: User[]) => boolean
): User | undefined => {
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

const myFindIndex = (
  arr: User[],
  callBack: (elem: User, id: number, arr: User[]) => boolean
): number | undefined => {
  for (let i = 0; i < arr.length; i++) {
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

const MyEvery = (
  arr: User[],
  callBack: (elem: User, id: number, arr: User[]) => boolean
): void => {
  let found: boolean = true;
  for (let i = 0; i < arr.length; i++) {
    if (!callBack(arr[i], i, arr)) {
      found = false;
      break;
    }
  }
  if (found) {
    console.log("У кого меньше 3000?");
  } else {
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

const mySort = (arr: User[], callBack: (a: User, b: User) => number): void => {
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

const myConcat = (
  arr: number[],
  arrTo: number[],
  callBack: (a: number, b: number) => number
): void => {
  const newArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  for (let i = 0; i < arrTo.length; i++) {
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

const myFill = (
  arr: number[],
  constant: number,
  start: number,
  end: number
): void => {
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
// const newArr = arrNumbers.reverse();
// console.log(`После ${newArr}`);

const myReverse = (arr: number[]): void => {
  let newArr: number[] = [];
  for (let i = arr.length; i > 0; i--) {
    newArr.push(arr[i - 1]);
  }
  console.log(newArr);
};

// challenge

forEachButton.addEventListener("click", () => {
  myForEach(arrName, (elem, id, arr) => {
    console.log(`Привет ${elem}! Ваш талон ${id}. Список людей: ${arr}`);
  });
});
mapButton.addEventListener("click", () => {
  let newArrNumbers: number[] = [];
  myMup(arrNumbers, (elem: number, i: number, arr: number[]) => {
    newArrNumbers.push(arr[i]);
    console.log(`${newArrNumbers[i]} * 2 = ${newArrNumbers[i] * 2}`);
    return newArrNumbers[i] * 2;
  });
});
filterButton.addEventListener("click", () => {
  myFilter(people, (user: User) => user.age <= 18);
});
someButton.addEventListener("click", () => {
  mySome(countries);
});
reduceButton.addEventListener("click", () => {
  myReduce(people, (total: number, person: User) => total + person.money);
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
  const index = myFindIndex(people, (elem, id, arr) => {
    return elem.name === "Кирилл";
  });

  if (index !== undefined) {
    console.log(index);
  } else {
    console.log("Элемент не найден.");
  }
});
everyButton.addEventListener("click", () => {
  MyEvery(people, (user: User) => user.money > 3000);
});
sortButton.addEventListener("click", () => {
  mySort(people, (a: User, b: User) => a.money - b.money);
});
concatButton.addEventListener("click", () => {
  myConcat(arrNumbers, arrNumbersTo, (a: number, b: number) => a + b);
});
fillButton.addEventListener("click", () => {
  myFill(arrNumbers, 0, 0, 5);
});
reverseButton.addEventListener("click", () => {
  myReverse(arrNumbers);
});
