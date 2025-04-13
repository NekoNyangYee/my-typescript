//문제
type Last<T> = T extends [infer _, infer R] ? R : never;
//infer _: 요소 전부 추론이지만 이름 안붙임

type G = Last<[string, number, boolean]>; // boolean
type H = Last<[42]>;                      // 42
type I = Last<[]>;                        // never
