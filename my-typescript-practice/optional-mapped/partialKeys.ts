interface Person2 {
    name: string;
    age: number;
    address: string;
    email: string;
}

type PartialOptional<T, K extends keyof T> = {
    [P in keyof T as P extends K ? P : never]?: T[P];
} & {
    [P in keyof T as P extends K ? never : P]?: T[P];
}

type PartialPerson = PartialOptional<Person2, "address" | "email">;

const person2: PartialPerson = {
    name: "김태현",
    age: 25,
};

person2.email = "kk@naver.com";

console.log(person2);

