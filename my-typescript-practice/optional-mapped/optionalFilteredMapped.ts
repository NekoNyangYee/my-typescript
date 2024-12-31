interface Products {
    id: number;
    name: string;
    age?: number;
    email?: string;
    isAdmin: boolean;
}

type FilteredOptionalType<T> = {
    [K in keyof T as {} extends Pick<T, K> ? K : never]: T[K];
};

type FilteredOptionalProps = FilteredOptionalType<Products>;

const optionUser: FilteredOptionalProps = {
    email: "kk@naver.com",
    age: 30,
};