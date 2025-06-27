// Obj 타입에서, 값의 타입이 ValueType인 속성들만 남기는
// FilterByValueType 유틸리티 타입을 만들어 보세요.
type FilterByValueType<Obj, ValueType> = {
  [K in keyof Obj as Obj[K] extends ValueType ? K : never]: Obj[K];
};

// --- 테스트 케이스 ---
interface UserInfo {
  id: number;
  name: string;
  email: string;
  age: number;
  isVerified: boolean;
}

// UserInfo에서 값이 string인 속성만 추출
// 결과가 { name: string; email: string; } 타입이 되어야 함
type StringPropsOnly = FilterByValueType<UserInfo, string>;

// UserInfo에서 값이 number인 속성만 추출
// 결과가 { id: number; age: number; } 타입이 되어야 함
type NumberPropsOnly = FilterByValueType<UserInfo, number>;

// 테스트용 변수 (이 코드가 에러 없이 동작해야 함)
const stringInfo: StringPropsOnly = {
  name: "홍길동",
  email: "gildong@example.com",
};

const numberInfo: NumberPropsOnly = {
  id: 123,
  age: 30,
};

// 이 변수 선언은 에러가 발생해야 함
/*
const invalidStringInfo: StringPropsOnly = {
  name: '홍길동',
  age: 30 // age 속성은 StringPropsOnly 타입에 없으므로 에러
};
*/
