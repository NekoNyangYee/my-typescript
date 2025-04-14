//문제
type TailOfTuple<T> = T extends [any, ...infer U] ? U : [];

// type TailOfTuple<T extends readonly unknown[]> =
//   number extends T['length'] ? never : T extends [any, ...infer R] ? R : [];
// number extends T['length'] : 일반 배열인지 확인하는 핵심 트릭

type T1 = TailOfTuple<[string, number, boolean]>; // [number, boolean] ✅
type T2 = TailOfTuple<[42]>;                      // [] ✅
type T3 = TailOfTuple<[]>;                        // [] ✅
type T4 = TailOfTuple<string[]>;                  // never ❌ (일반 배열은 안됨)
