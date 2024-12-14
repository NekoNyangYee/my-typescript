interface Person6 {
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
}

type SeperateByType<T, U> = {
    matching: {
        [P in keyof T as T[P] extends U ? P : never]: T[P]; //as는 각 키를 T[P] extends U ? P : never이거로 바꾼단 소리
    }
} & {
    nonMatching: {
        [P in keyof T as T[P] extends U ? never : P]: T[P];
    }
};

type SeparatedPerson = SeperateByType<Person6, string>;

const separated: SeparatedPerson = {
    matching: {
        name: "Alice",
        email: "alice@example.com",
    },
    nonMatching: {
        age: 30,
        isAdmin: false,
    },
};