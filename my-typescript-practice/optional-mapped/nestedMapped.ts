interface Person7 {
  name: string;
  age: number;
  email: string;
  isAdmin: boolean;
}

type NestKeys<T> = {
  [K in keyof T]: {
    [P in K]: T[P];
  }
}

type NestedPerson = NestKeys<Person>;

const nested: NestedPerson = {
  name: { name: "Alice" },
  age: { age: 30 },
  email: { email: "alice@example.com" },
};

console.log(nested);
// 출력: { name: { name: "Alice" }, age: { age: 30 }, email: { email: "alice@example.com" } }


