//문제
type ElementType<T> = T extends (infer U)[] ? U : never;

type A = ElementType<string[]>;      // string
type B = ElementType<number[]>;      // number
type C = ElementType<boolean[][]>;   // boolean[] ← 한 번만 추출!
