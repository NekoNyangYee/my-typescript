interface Props<T, U> {
    name: T;
    age: U;
}

function nameAndAge<T, U>(name: T, age: U): Props<T, U> {
    return { name, age };
}

const myName = nameAndAge("name", "Jhon");
const myAge = nameAndAge("age", 25);

console.log(myName);
console.log(myAge);