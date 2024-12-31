interface Account {
    id: number;
    username: string;
    isActive: boolean;
    isAdmin: boolean;
    email: string;
}

type FilteredBooleanTypes<T> = {
    [P in keyof T as T[P] extends boolean ? P : never]: T[P];
};

type FilteredBooleanProps = FilteredBooleanTypes<Account>;

const booleanAccount: FilteredBooleanProps = {
    isActive: true,
    isAdmin: false,
};

console.log(booleanAccount);