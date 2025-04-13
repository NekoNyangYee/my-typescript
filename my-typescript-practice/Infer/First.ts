//문제
type First<T> = T extends [infer U, ...Array<any>] ? U : never;

type D = First<[string, number, boolean]>; // string
type E = First<[42]>;                      // 42
type F = First<[]>;                        // never
