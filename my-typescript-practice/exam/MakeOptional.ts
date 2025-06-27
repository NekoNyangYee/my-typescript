// T 타입에서 K에 명시된 키들만 선택적(optional)으로 만드는
// MakeOptional<T, K> 유틸리티 타입을 만들어보세요.
type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// --- 테스트 케이스 ---
interface UserAccount {
  id: number;
  username: string;
  email?: string; // 원래 email은 선택적
  phone: string; // phone은 필수
}

// UserAccount 타입에서 'username'과 'phone' 속성을 선택적으로 만들고 싶습니다.
// (원래 선택적이었던 email은 그대로 선택적이어야 합니다)
type UpdateUserPayload = MakeOptional<UserAccount, "username" | "phone">;
// 예상 결과 타입:
// {
//   id: number;
//   username?: string;
//   email?: string;
//   phone?: string;
// }

// 테스트용 변수 (이 코드가 에러 없이 동작해야 함)
const userToUpdate1: UpdateUserPayload = {
  id: 1,
  // username과 phone은 선택적이므로 제공하지 않아도 OK
};

const userToUpdate2: UpdateUserPayload = {
  id: 2,
  username: "gildong-kim", // username만 제공해도 OK
};

// id는 필수 속성이므로 없으면 에러가 발생해야 함
/*
const invalidUser: UpdateUserPayload = {
    username: 'kang',
    phone: '010-1234-5678'
};
*/
