// arr

const arrName: string[] = ["Артем", "Павел", "Кирилл"];
const arrNumber: number[] = [1, 2, 3, 4, 5];
const arrNumberTo: number[] = [10, 20, 30, 40, 50];
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

function forEach(): void {
  // arrName.forEach((elem, id, arr) => {
  //     console.log(`Привет ${elem}! Ваш талон ${id}. Список людей: ${arr}`)
  // })

  for (let i = 0; i < arrName.length; i++) {
    console.log(
      `Привет ${arrName[i]}! Ваш талон ${i}. Список людей: ${arrName}`
    );
  }
}

// map

// Принимает фун-ю возвращает новый массив

function map() {
  //   arrNumber.map((elem, id, arr) => {
  //     console.log(`${elem} * 2 = ${elem * 2}`);
  //   });

  let newArrNumber: number[] = [];

  for (let i = 0; i < arrNumber.length; i++) {
    newArrNumber.push(arrNumber[i]);
    console.log(`${newArrNumber[i]} * 2 = ${newArrNumber[i] * 2}`);
  }
}

// forEach
// 1.возвращает undefined
// 2. forEach нужен для работы с элементами исходного массива
// map
// 1.возвращает новый массив с изменёнными элементами
// 2. map нужен для того чтобы работать с копией массива

// filter

// Принимает фун-ю возвращает новый массив, который был отфильтрован условием

function filter() {
  //   console.log("Весь массив");
  //   console.log(JSON.stringify(people));
  //   const newPeople = people.filter((person) => person.age >= 18);
  //   console.log("Условие: старше 18 лет. Результат Filter");
  //   console.log(JSON.stringify(newPeople));

  let newPeople: User[] = [];

  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
      newPeople.push(people[i]);
    }
  }
  console.log(newPeople);
}

// some

// вернет значение true, если хотя бы один элемент совпадет с
// проверяемой функцией, и значение false — если нет

function some() {
  const f = prompt("Узнайте в каких странах находятся наши филиалы.", "");
  let found: boolean = false;
  // const arr = countries.some((elem) => {
  //   return elem === f;
  // });
  // if (arr === true) {
  //   console.log(`В этой стране есть наш филиал`);
  // } else {
  //   console.log("В этой стране нет нашего филиала");
  // }

  for (let i = 0; i < countries.length; i++) {
    if (f === countries[i]) {
      found = true;
      break;
    }
  }

  if (found) {
    console.log(`В этой стране есть наш филиал`);
  } else {
    console.log("В этой стране нет нашего филиала");
  }
}

// Reduce

// total - изначальное значение 0 / аккумулятор
// people - итерируемый элемент массива

function reduce() {
  // console.log(`В компании ${people.length} человека`);
  // const summa = people.reduce((total, people) => total + people.money, 0);
  // console.log(`Общий бюджет ${summa}`);
  let summa: number = 0;
  for (let i = 0; i < people.length; i++) {
    summa += people[i].money;
  }
  console.log(`Общий бюджет ${summa}`);
}

// find

// Находит элемент массива

function find() {
  console.log("Нужно найти Артема");
  // const firstName = people.find((people) => people.name === "Артем");
  // console.log(firstName);

  for (let i = 0; i < people.length; i++) {
    if (people[i].name === "Артем") {
      console.log(people[i]);
    }
  }
}

// findIndex

// Находит индекс элемента массива

function findIndex() {
  // const firstNameIndex = people.findIndex((people) => people.name === "Кирилл");
  // const result = `${people[firstNameIndex].name} в очереди ${
  //   firstNameIndex + 1
  // }`;
  // console.log(result);

  for (let i = 0; i < people.length; i++) {
    if (people[i].name === "Кирилл") {
      console.log(i);
    }
  }
}

// every
// Возвращает true если вся подходят под условие, иначе false

function every() {
  console.log("У кого меньше 3000?");
  // const arr = people.every((people) => people.money < 3001);
  // if (arr === true) {
  //   console.log("У всех меньше 3000");
  // } else {
  //   console.log("У всех больше 3000");
  // }

  let found: boolean = false;

  for (let i = 0; i < people.length; i++) {
    if (people[i].money < 3001) {
      found = true;
      break;
    }
  }
  if (found === true) {
    console.log("У всех меньше 3000");
  } else {
    console.log("У всех больше 3000");
  }
}

// sort
// Сортировка a сравнивается с b
// < 0 => a первый
// === 0 => ничего не меняется
// < 0 => b первый
function sort() {
  // const sortedPeople = people.sort((a, b) => a.money - b.money);
  // const names = sortedPeople.map((person) => person.name).join(" / ");
  // console.log(
  //   ` Список людей с количеством наличных по мере возрастания: ${names}`
  // );

  for (let i = 0; i < people.length - 1; i++) {
    for (let j = 0; j < people.length - 1 - i; j++) {
      if (people[j].money > people[j + 1].money) {
        let temp = people[j];
        people[j] = people[j + 1];
        people[j + 1] = temp;
      }
    }
  }
  console.log(people);
}

// concat
// объединяет два или более массива и возвращает новый массив

function concat() {
  // const newArr = arrNumber.concat(arrNumberTo);
  // console.log(newArr);
  const newArr: number[] = [];
  for (let i = 0; i < arrNumber.length; i++) {
    newArr.push(arrNumber[i]);
  }
  for (let i = 0; i < arrNumberTo.length; i++) {
    newArr.push(arrNumberTo[i]);
  }
  console.log(newArr);
}

// fill
// Изменяет исходный массив и возвращает ссылку на него
// Заполняет массив (чем, от включительно, до не включая)
function fill() {
  // console.log(`До ${arrNumber}`);
  // const newArr = arrNumber.fill(0, 0, 4);
  // console.log(`После ${newArr}`);

  for (let i = 0; i < arrNumber.length - 1; i++) {
    arrNumber[i] = 0;
  }

  console.log(arrNumber);
}

// reverse
// меняет порядок следования элементов в массиве на обратный
function reverse() {
  // console.log(`До ${arrNumber}`);
  // const newArr = arrNumber.reverse();
  // console.log(`После ${newArr}`);

  let newArr: number[] = [];
  for (let i = arrNumber.length; i > 0; i--) {
    newArr.push(arrNumber[i - 1]);
  }
  console.log(newArr);
}

// challenge

forEachButton.addEventListener("click", forEach);
mapButton.addEventListener("click", map);
filterButton.addEventListener("click", filter);
someButton.addEventListener("click", some);
reduceButton.addEventListener("click", reduce);
findButton.addEventListener("click", find);
findIndexButton.addEventListener("click", findIndex);
everyButton.addEventListener("click", every);
sortButton.addEventListener("click", sort);
concatButton.addEventListener("click", concat);
fillButton.addEventListener("click", fill);
reverseButton.addEventListener("click", reverse);
