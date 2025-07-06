// --- ↓↓↓ 여기에 animEngine의 타입을 선언하세요 ↓↓↓ ---

type Animate = "linear" | "ease-in" | "ease-out";
type AnimateCallback = () => void;

interface AnimateState {
  easing: Animate;
  getFps: () => number;
  run: (element: Element, animationCompleteCallback: AnimateCallback) => void;
}

/* 여기에 타입 선언 코드를 작성하세요 */
declare const animEngine: AnimateState;
// --- ↑↑↑ 여기에 animEngine의 타입을 선언하세요 ↑↑↑ ---

// --- 테스트 케이스 ---
// 아래 코드는 여러분이 타입을 올바르게 선언했다면
// 어떠한 타입 에러도 발생시키지 않아야 합니다.

// 1. 현재 FPS와 이징(easing) 값 확인
const currentFps = animEngine.getFps();
console.log(`현재 FPS: ${currentFps}, 이징: ${animEngine.easing}`);

// 2. 애니메이션 실행
const myElement = document.getElementById("box");
if (myElement) {
  // animEngine.run의 두 번째 인자로 콜백 함수를 전달합니다.
  animEngine.run(myElement, () => {
    console.log("애니메이션이 종료되었습니다!");
    myElement.textContent = "Animation Complete!";
  });
}

// --- 아래는 모두 타입 에러가 발생해야 올바른 선언입니다 ---

// 3. easing에 허용되지 않은 값을 할당하려고 시도 (Error)
/*
animEngine.easing = 'ease-in-out'; // 'ease-in-out'은 허용된 타입이 아님
*/

// 4. run 함수의 첫 번째 인자 타입이 일치하지 않는 경우 (Error)
/*
animEngine.run("box-id", () => { // Element 객체가 아닌 string을 전달
  console.log('이 코드는 실행되지 않아야 합니다.');
});
*/

// 5. run 함수의 콜백 함수 시그니처가 일치하지 않는 경우 (Error)
/*
if (myElement) {
  animEngine.run(myElement, (error) => { // 콜백 함수는 인자를 받지 않아야 함
    console.log('이 코드는 실행되지 않아야 합니다.');
  });
}
*/

// 6. 존재하지 않는 메소드 호출 (Error)
/*
animEngine.stop();
*/
