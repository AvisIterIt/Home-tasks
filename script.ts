// arr

const arrName: string[] = ["Артем", "Павел", "Кирилл"]
const arrNumber: number[] = [1, 2, 3, 4, 5]
const arrNumberTo: number[] = [10, 20, 30, 40, 50]
const people: User[] = [
    { name: "Артем", age: 15, money: 1000 },
    { name: "Александр", age: 19, money: 2000 },
    { name: "Кирилл", age: 20, money: 1500 },
    { name: "Илья", age: 12, money: 3000 },
]

type User = {
    name: string
    age: number
    money: number
}

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
]

// Объекты страницы

const forEachElement = document.querySelector(".div__forEach")!
const forEachButton = forEachElement.querySelector(".button")!
const mapElement = document.querySelector(".div__map")!
const mapButton = mapElement.querySelector(".button")!
const filterElement = document.querySelector(".div__filter")!
const filterButton = filterElement.querySelector(".button")!
const someElement = document.querySelector(".div__some")!
const someButton = someElement.querySelector(".button")!
const reduceElement = document.querySelector(".div__reduce")!
const reduceButton = reduceElement.querySelector(".button")!
const findElement = document.querySelector(".div__find")!
const findButton = findElement.querySelector(".button")!
const findIndexElement = document.querySelector(".div__findIndex")!
const findIndexButton = findIndexElement.querySelector(".button")!
const everyElement = document.querySelector(".div__every")!
const everyButton = everyElement.querySelector(".button")!
const sortElement = document.querySelector(".div__sort")!
const sortButton = sortElement.querySelector(".button")!
const concatElement = document.querySelector(".div__concat")!
const concatButton = concatElement.querySelector(".button")!
const fillElement = document.querySelector(".div__fill")!
const fillButton = fillElement.querySelector(".button")!
const reverseElement = document.querySelector(".div__reverse")!
const reverseButton = reverseElement.querySelector(".button")!

// forEach

// Применяет функцию к каждому элементу массива

function forEach(): void {
    arrName.forEach((elem, id, arr) => {
        alert(`Привет ${elem}! Ваш талон ${id}. Список людей: ${arr}`)
    })
}

// map

// Принимает фун-ю возвращает новый массив

function map() {
    arrNumber.map((elem, id, arr) => {
        alert(`${elem} * 2 = ${elem * 2}`)
    })
}

// filter

// Принимает фун-ю возвращает новый массив, который был отфильтрован условием

function filter() {
    alert("Весь массив")
    alert(JSON.stringify(people))
    const newPeople = people.filter((person) => person.age >= 18)
    alert("Условие: старше 18 лет. Результат Filter")
    alert(JSON.stringify(newPeople))
}

// some

// вернет значение true, если хотя бы один элемент совпадет с
// проверяемой функцией, и значение false — если нет

function some() {
    const f = prompt("Узнайте в каких странах находятся наши филиалы.", "")
    const arr = countries.some((elem) => {
        return elem === f
    })
    if (arr === true) {
        alert(`В этой стране есть наш филиал`)
    } else {
        alert("В этой стране нет нашего филиала")
    }
}

// Reduce

// total - изначальное значение 0 / аккумулятор
// people - итерируемый элемент массива

function reduce() {
    alert(`В компании ${people.length} человека`)
    const summa = people.reduce((total, people) => total + people.money, 0)
    alert(`Общий бюджет ${summa}`)
}

// find

// Находит элемент массива

function find() {
    alert("Нужно найти Артема")
    const firstName = people.find((people) => people.name === "Артем")
    const result = `name: ${firstName.name}, age: ${firstName.age}, money: ${firstName.money}`
    alert(result)
}

// findIndex

// Находит индекс элемента массива

function findIndex() {
    const firstNameIndex = people.findIndex((people) => people.name === "Кирилл")
    const result = `${people[firstNameIndex].name} в очереди ${firstNameIndex + 1}`
    alert(result)
}

// every
// Возвращает true если вся подходят под условие, иначе false

function every() {
    alert("У кого меньше 3000?")
    const arr = people.every((people) => people.money < 3001)
    if (arr === true) {
        alert("У всех меньше 3000")
    } else {
        alert("У всех больше 3000")
    }
}

// sort
// Сортировка a сравнивается с b
// < 0 => a первый
// === 0 => ничего не меняется
// < 0 => b первый
function sort() {
    const sortedPeople = people.sort((a, b) => a.money - b.money)
    const names = sortedPeople.map((person) => person.name).join(" / ")
    alert(` Список людей с количеством наличных по мере возрастания: ${names}`)
}

// concat
// объединяет два или более массива и возвращает новый массив

function concat() {
    const newArr = arrNumber.concat(arrNumberTo)
    alert(newArr)
}

// fill
// Изменяет исходный массив и возвращает ссылку на него
// Заполняет массив (чем, от включительно, до не включая)
function fill() {
    alert(`До ${arrNumber}`)
    const newArr = arrNumber.fill(0, 0, 4)
    alert(`После ${newArr}`)
}

// reverse
// меняет порядок следования элементов в массиве на обратный
function reverse() {
    alert(`До ${arrNumber}`)
    const newArr = arrNumber.reverse()
    alert(`После ${newArr}`)
}

// challenge

forEachButton.addEventListener("click", forEach)
mapButton.addEventListener("click", map)
filterButton.addEventListener("click", filter)
someButton.addEventListener("click", some)
reduceButton.addEventListener("click", reduce)
findButton.addEventListener("click", find)
findIndexButton.addEventListener("click", findIndex)
everyButton.addEventListener("click", every)
sortButton.addEventListener("click", sort)
concatButton.addEventListener("click", concat)
fillButton.addEventListener("click", fill)
reverseButton.addEventListener("click", reverse)
