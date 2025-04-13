//문제 
type HasTail<T extends any[]> = T extends [any, ...infer U] ? U extends [] ? false : true : false;
//[any, ...infer U]첫번째 요소 제외 요소가 1개 이상일 경우

type X = HasTail<[string, number]>;  // true ✅
type Y = HasTail<[boolean]>;         // false ❌
type Z = HasTail<[]>;                // false ❌
