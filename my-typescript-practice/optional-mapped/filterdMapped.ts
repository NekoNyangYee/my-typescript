interface Person5 {
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
}

type FilteredType<T, StringType> = {
    [P in keyof T as T[P] extends StringType ? P : never]: T[P];
}

type StringProps = FilteredType<Person5, string>;

const filteredPerson2: StringProps = {
    name: "Alice",
    email: "alice@example.com",
};

console.log(filteredPerson2);