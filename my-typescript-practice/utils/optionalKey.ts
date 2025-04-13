type User3 = {
    id: number;
    name?: string;
    age?: number;
};

//틀림림
// type OptionalKeys<T> = {
//     [K in keyof T]?: T[K]
// }

//정답
type OptionalKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? K : never
}[keyof T];
  
  
type Result = OptionalKeys<User3>; // "name" | "age"
  