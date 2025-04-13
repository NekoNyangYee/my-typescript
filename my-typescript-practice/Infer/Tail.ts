//문제
type Tail<T> = T extends [any, ...infer U] ? U : never;
//any는 타입 추론에서 무시

type AA = Tail<[string, number, boolean]>; // [number, boolean]
type BB = Tail<[42]>;                      // []
type CC = Tail<[]>;                        // never
