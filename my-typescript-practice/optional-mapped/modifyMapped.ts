interface Person4 {
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
}

type ModifyKeys<T, K, S> = {
    [P in keyof T]: P extends K ? S : T[P];
}

type ModifyPerson = ModifyKeys<Person4, "email" | "isAdmin", string>;

const modifyPerson2: ModifyPerson = {
    name: "Alice",
    age: 30,
    email: "alice@example.com", // 변경됨
    isAdmin: "true", // 변경됨
}

console.log(modifyPerson2);