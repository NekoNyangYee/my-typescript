function transformProperties<T, K extends keyof T>(
    array: T[],
    key: K,
    transform: (value: T[K]) => T[K]
): T[] {
    return array.map(item => {
        return {
            ...item,                 // 1. 기존 객체를 복사
            [key]: transform(item[key]), // 2. 특정 속성(key)의 값을 덮어씌움
        };
    });
}


const people2 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
];

// 이름을 대문자로 변환
const uppercasedNames = transformProperties(people2, 'name', (name) => name.toUpperCase());
console.log(uppercasedNames);
// [
//   { name: 'ALICE', age: 25 },
//   { name: 'BOB', age: 30 },
//   { name: 'CHARLIE', age: 35 },
// ]

// 나이를 두 배로 변환
const doubledAges = transformProperties(people2, 'age', (age) => age * 2);
console.log(doubledAges);
// [
//   { name: 'Alice', age: 50 },
//   { name: 'Bob', age: 60 },
//   { name: 'Charlie', age: 70 },
// ]
