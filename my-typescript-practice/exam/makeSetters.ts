// 주어진 객체 타입 T의 각 속성을 'setter' 함수로 변환하는
// 'MakeSetters<T>' 유틸리티 타입을 만들어보세요.

type MakeSetters<T> = {
  [K in keyof T as `set${Capitalize<string & K>}`]: (values: T[K]) => void;
};

// --- 테스트 케이스 ---
type UserProfile = {
  username: string;
  email: string;
  age: number;
};

// 이 타입이 아래 주석과 같이 올바르게 추론되어야 합니다.
type UserProfileSetters = MakeSetters<UserProfile>;

/*
// UserProfileSetters 타입은 다음과 같아야 합니다:
{
  setUsername: (value: string) => void;
  setEmail: (value: string) => void;
  setAge: (value: number) => void;
}
*/
