interface UserBasic {
    name: string;
    age: number;
    email?: string;
    description?: string;
}

type UserInfo = Omit<UserBasic, 'name' | 'age'>;

const userExtends: UserInfo = {
    email: 'a@kakao.com',
    description: 'hello'
}

function printUserOmit<T extends UserInfo>(user: T): void {
    console.log(user.email, user.description);
}

printUserOmit(userExtends);