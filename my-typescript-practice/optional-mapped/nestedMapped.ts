interface Person7 {
  name: string;
  age: number;
  email: string;
}

type NestKeys<T> = {
  [K in keyof T]: {
    [P in K]: T[P];
  }
}

type NestedPerson = NestKeys<Person7>;

const nested: NestedPerson = {
  name: { name: "Alice" },
  age: { age: 30 },
  email: { email: "alice@example.com" },
  isAdmin: { isAdmin: true },
};

console.log(nested);
// 출력: { name: { name: "Alice" }, age: { age: 30 }, email: { email: "alice@example.com" } }


