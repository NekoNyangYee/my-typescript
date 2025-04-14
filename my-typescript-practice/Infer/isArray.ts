//문제
type IsArray<T> = T extends any[] ?  true : false;

type Ex1 = IsArray<string[]>;        // true ✅
type Ex2 = IsArray<[]>;              // true ✅
type Ex3 = IsArray<number>;          // false ❌
type Ex4 = IsArray<{ length: 3 }>;   // false ❌
