interface Person3 {
    name: string;
    age: number;
    email: string;
}

type BooleanMapped<T> = {
    [K in keyof T]: boolean;
}

type BooleanPerson = BooleanMapped<Person3>;

const person3: BooleanPerson = {
    name: true,
    age: false,
    email: true,
};

console.log(person3);