export {}

let a = [1, 2, 3]
let b = a

b.push(4)

console.log(a)
console.log(b)

let x: number[] = []
let y: number[] = []

console.log(x === y)

const z = 1
const t = [1, 2, 3]

t.length = 0

console.log(t)
