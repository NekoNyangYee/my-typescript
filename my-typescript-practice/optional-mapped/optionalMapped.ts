interface Person {
    name: string;
    age: number;
    email: string;
}

type OptionalMapped<T> = {
    [K in keyof T]?: T[K];
}

type OptionalPerson = OptionalMapped<Person>;

const person: OptionalPerson = {
    name: "Alice",
}

person.age = 25;

console.log(person);