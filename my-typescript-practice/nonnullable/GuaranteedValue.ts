// string, number, null, undefined를 포함할 수 있는 타입
type PossibleValue = string | number | null | undefined;

// NonNullable<T> 유틸리티 타입을 사용해서,
// PossibleValue 타입에서 null과 undefined를 제거한
// GuaranteedValue 타입을 만들어 보세요.

type GuaranteedValue = NonNullable<PossibleValue>;

// --- 테스트 케이스 ---

// 이 함수는 null이나 undefined가 아닌, '확실한' 값만 받도록 설계되었습니다.
function processValue(value: GuaranteedValue) {
  // 이제 'value'는 string 또는 number임이 보장됩니다.
  console.log(`Processing value: ${value}`);
}

// 아래 함수 호출들은 성공해야 합니다.
processValue("hello");
processValue(123);

// 아래 변수들은 GuaranteedValue 타입이 아니므로 processValue 함수에 전달하면
// 타입 에러가 발생해야 합니다.
const nullValue: PossibleValue = null;
const undefinedValue: PossibleValue = undefined;
/*
processValue(nullValue);      // Error: Argument of type 'null' is not assignable to parameter of type 'string | number'.
processValue(undefinedValue); // Error: Argument of type 'undefined' is not assignable to parameter of type 'string | number'.
*/
