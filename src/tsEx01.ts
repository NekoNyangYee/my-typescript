interface User01 {
    id: number;
    name: string;
    email: string;
    age: number;
    address: string;
}

type User01Info = Omit<User01, 'id' | 'age' | 'address'>;

const user01: User01Info = {
    name: 'thkim',
    email: 'kk0812@naver.com',
}

function printUser01<T extends User01Info>(user: T) {
    console.log(user.name, user.email);
}