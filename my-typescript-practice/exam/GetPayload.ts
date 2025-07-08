// --- ↓↓↓ 여기에 GetPayload 타입을 정의하세요 ↓↓↓ ---

type GetPayload<T> = T extends (arg: infer P, ...args: Array<any>) => any
  ? P
  : never;

// --- ↑↑↑ 여기에 GetPayload 타입을 정의하세요 ↑↑↑ ---

// --- 테스트 케이스 ---
// 아래 테스트 케이스들이 모두 에러 없이 동작하도록 위 타입을 완성해야 합니다.

// 테스트를 위한 함수 타입들 정의
type ClickHandler = (event: { x: number; y: number }) => void;
type KeydownHandler = (event: { key: string }) => void;
type ScrollHandler = () => void; // 매개변수가 없는 함수
type NotAFunction = string;

// 1. ClickHandler의 첫 번째 매개변수 타입 추출 (OK)
// payload1의 타입은 { x: number; y: number } 이어야 합니다.
type payload1 = GetPayload<ClickHandler>;
const clickEventData: payload1 = { x: 100, y: 200 };

// 2. KeydownHandler의 첫 번째 매개변수 타입 추출 (OK)
// payload2의 타입은 { key: string } 이어야 합니다.
type payload2 = GetPayload<KeydownHandler>;
const keydownEventData: payload2 = { key: "Enter" };

// 3. 매개변수가 없는 함수의 경우 (OK)
// payload3의 타입은 never 이어야 합니다.
type payload3 = GetPayload<ScrollHandler>;
// const scrollEventData: payload3 = {}; // Error: 'never' 형식에 '{}' 형식을 할당할 수 없습니다.

// 4. 함수가 아닌 타입을 전달한 경우 (OK)
// payload4의 타입은 never 이어야 합니다.
type payload4 = GetPayload<NotAFunction>;
// const nonFuncData: payload4 = "hello"; // Error: 'never' 형식에 'string' 형식을 할당할 수 없습니다.
