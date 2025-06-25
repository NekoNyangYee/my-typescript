type User0 = {
  id: number;
  name: string;
  email: string;
  password: string;
  token: string;
};

// 여기에 PublicUser 타입을 작성하세요
type PublicUser = Pick<User0, Exclude<keyof User0, "password" | "token">>;
