//문제
type IsSingleElementArray<T> = T extends [infer _] ? true : false;

type Case1 = IsSingleElementArray<[number]>;          // true ✅
type Case2 = IsSingleElementArray<[string, boolean]>; // false ❌
type Case3 = IsSingleElementArray<[]>;                // false ❌
type Case4 = IsSingleElementArray<string[]>;          // false ❌ (일반 배열은 길이 모름)
