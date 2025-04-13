//문제
type IsTuple<T> = T extends any[] ? number extends T['length'] ? false : true : false;

type AAA = IsTuple<[string, number]>; // true ✅
type BBB = IsTuple<string[]>;         // false ❌
type CCC = IsTuple<[]>;               // true ✅
