type User2 = {
    id: number;
    name: string;
    email: string;
};

//문제
type GetValue<T, K extends keyof T> = T[K];
  
type NameType = GetValue<User2, 'name'>; // string
  