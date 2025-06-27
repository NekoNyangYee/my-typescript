// '브랜드 타입'을 만드는 헬퍼 타입 (이 부분은 이미 제공됩니다)
type Brand1<K, T> = K & { readonly __brand: T };

// --- Step 1: Brand 타입을 사용해 'USD'와 'EUR' 타입 만들기 ---

// USD: 숫자를 기반으로 'UsDollar' 브랜드를 입힌 타입
type USD = Brand1<number, "USD">;

// EUR: 숫자를 기반으로 'Euro' 브랜드를 입힌 타입
type EUR = Brand1<number, "EUR">;

// --- Step 2: 타입 안정성 테스트 ---

// 각 통화별로 더하기 함수를 만듭니다.
function addDollars(a: USD, b: USD): USD {
  // 실제 계산은 그냥 숫자처럼 하지만, 결과에 다시 브랜드를 입혀줍니다.
  return (a + b) as USD;
}

function addEuros(a: EUR, b: EUR): EUR {
  return (a + b) as EUR;
}

// 테스트용 값 생성
const myDollars = 100 as USD;
const myEuros = 50 as EUR;
const moreDollars = 25 as USD;

// 이 함수 호출은 성공해야 합니다. (OK)
const totalDollars = addDollars(myDollars, moreDollars);
console.log(`Total Dollars: ${totalDollars}`);

// 아래 함수 호출은 타입 에러를 발생시켜야 합니다.
/*
const mixedTotal = addDollars(myDollars, myEuros); // Error: Argument of type 'EUR' is not assignable to parameter of type 'USD'.
*/
