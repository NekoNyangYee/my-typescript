//문제
type ReturnTypeOf<T> = T extends (...args: any[]) => infer U ? U: never;

type Fn1 = () => number;
type Fn2 = (x: string) => Promise<boolean>;
type Fn3 = string;

type R1 = ReturnTypeOf<Fn1>; // number ✅
type R2 = ReturnTypeOf<Fn2>; // Promise<boolean> ✅
type R3 = ReturnTypeOf<Fn3>; // never ❌ 함수 아님
