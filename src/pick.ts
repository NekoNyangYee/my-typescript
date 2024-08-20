interface User {
    name: string;
    age: number;
    email?: string;
}

type UserbasicInfo = Pick<User, 'name' | 'age'>;

const user: UserbasicInfo = {
    name: 'Jhon',
    age: 25,
}

function printUser<T extends UserbasicInfo>(user: T): void {
    console.log(user.name, user.age);
}

printUser(user);