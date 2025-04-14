//문제
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
//오 맞음

type ExA = UnwrapPromise<Promise<number>>;               // number ✅
type ExB = UnwrapPromise<Promise<string[]>>;             // string[] ✅
type ExC = UnwrapPromise<boolean>;                       // boolean ✅
type ExD = UnwrapPromise<Promise<Promise<Date>>>;        // Promise<Date> ✅ (한 번만
