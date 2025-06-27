// --- 문제 ---
// 아래 테스트 케이스들이 정상적으로 동작하고,
// 에러가 발생하는 부분에서는 올바르게 타입 에러를 발생시키도록
// getProperty 함수의 시그니처와 구현을 완성하세요.

interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  // 👈 이 부분을 타입 안전하게 수정하세요
  return obj[key];
}

// --- 테스트 케이스 ---
const person = {
  name: "홍길동",
  age: 30,
  isStudent: false,
};

// getProperty(person, 'name')의 반환 타입이 'string'으로 추론되어야 합니다.
const personName: string = getProperty(person, "name");

// getProperty(person, 'age')의 반환 타입이 'number'으로 추론되어야 합니다.
const personAge: number = getProperty(person, "age");

// getProperty(person, 'isStudent')의 반환 타입이 'boolean'으로 추론되어야 합니다.
const personIsStudent: boolean = getProperty(person, "isStudent");

// 아래 함수 호출은 타입 에러를 발생시켜야 합니다. (Error)
/*
const personAddress = getProperty(person, 'address'); // Error: 'address'는 person 객체에 없는 키
*/
