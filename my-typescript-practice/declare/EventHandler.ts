// --- ↓↓↓ 여기에 eventHandler의 타입을 선언하세요 ↓↓↓ ---

/* 여기에 타입 선언 코드를 작성하세요 */

type EventName = "click" | "scroll" | "custom";

interface EventHandlerState {
  readonly listenerCount: number;
  on(eventName: "click", callback: (event: MouseEvent) => void): void;
  on(eventName: "scroll", callback: (event: Event) => void): void;
  on(
    eventName: "custom",
    callback: (data: { [key: string]: any }) => void
  ): void;
  off(eventName: EventName): void;
}

declare const eventHandler: EventHandlerState;

// --- ↑↑↑ 여기에 eventHandler의 타입을 선언하세요 ↑↑↑ ---

// --- 테스트 케이스 ---
// 아래 코드는 여러분이 타입을 올바르게 선언했다면
// 어떠한 타입 에러도 발생시키지 않아야 합니다.

// 1. 현재 리스너 개수 확인
console.log(`현재 리스너 수: ${eventHandler.listenerCount}`);

// 2. 'click' 이벤트 리스너 등록 (오버로딩 시그니처 #1)
eventHandler.on("click", (e) => {
  // 'e'는 MouseEvent 타입으로 추론되어야 합니다.
  console.log(`클릭 위치: ${e.clientX}, ${e.clientY}`);
});

// 3. 'scroll' 이벤트 리스너 등록 (오버로딩 시그니처 #2)
eventHandler.on("scroll", (e) => {
  // 'e'는 Event 타입으로 추론되어야 합니다.
  console.log("스크롤 발생!", e.type);
});

// 4. 'custom' 이벤트 리스너 등록 (오버로딩 시그니처 #3)
eventHandler.on("custom", (data) => {
  // 'data'는 { [key: string]: any } 타입으로 추론되어야 합니다.
  console.log("커스텀 데이터:", data.message);
});

// 5. 이벤트 리스너 해제
eventHandler.off("click");

// --- 아래는 모두 타입 에러가 발생해야 올바른 선언입니다 ---

// 6. 'click' 이벤트에 잘못된 콜백 함수를 전달 (Error)
/*
eventHandler.on('click', (data: { message: string }) => {
  // 'click' 이벤트의 콜백은 MouseEvent를 인자로 받아야 함
  console.log(data.message);
});
*/

// 7. 'custom' 이벤트에 잘못된 콜백 함수를 전달 (Error)
/*
eventHandler.on('custom', (e: MouseEvent) => {
  // 'custom' 이벤트의 콜백은 data 객체를 인자로 받아야 함
  console.log(e.clientX);
});
*/

// 8. 존재하지 않는 이벤트를 사용 (Error)
/*
eventHandler.on('resize', () => {
  // 'resize'는 허용된 이벤트가 아님
});
*/

// 9. 읽기 전용 속성에 값 할당 시도 (Error)
/*
eventHandler.listenerCount = 10;
*/
