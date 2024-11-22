"use strict";
class Person {
    constructor(person) {
        this.name = person.name;
        this.age = person.age;
        this.connections = [];
    }
    addConnection(person) {
        this.connections.push(person);
        person.connections.push(this);
    }
    getConnections() {
        return Array.from(this.connections);
    }
}
const ivan = new Person({ name: "Ivan", age: 30 });
const petr = new Person({ name: "Petr", age: 25 });
console.log(ivan.getConnections()); //[]
console.log(petr.getConnections()); //[]
ivan.addConnection(petr);
console.log(ivan.getConnections()); // [Petr]
console.log(petr.getConnections()); // [Ivan]
