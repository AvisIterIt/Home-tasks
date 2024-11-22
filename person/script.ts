interface Person {
    name: string;
    age: number;
    connections: Person[];
}

class Person implements Person {
    constructor(person: { name: string; age: number }) {
        this.name = person.name;
        this.age = person.age;
        this.connections = [];
    }

    addConnection(person: Person) {
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
