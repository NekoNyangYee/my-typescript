// 함수 타입 T의 매개변수 타입들을 튜플로 추출하는 유틸리티 타입을 만드세요.
// 만약 T가 함수가 아니면, never 타입을 반환합니다.
type GetParameters<T> = T extends (...args: infer P) => any ? P : never;

// --- 테스트 케이스 ---
const sampleFunction = (id: string, score: number) => {
  /* ... */
};
const arrowFunction = () => {
  /* ... */
};

// 이 타입들이 에러 없이 올바르게 추론되어야 합니다.
type SampleParams = GetParameters<typeof sampleFunction>; // 결과가 [string, number] 타입이어야 함
type ArrowParams = GetParameters<typeof arrowFunction>; // 결과가 [] 타입이어야 함 (매개변수 없음)
type NonFunctionParams = GetParameters<boolean>; // 결과가 never 타입이어야 함
