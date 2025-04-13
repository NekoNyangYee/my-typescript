function pluck<T, K extends keyof T>(array: Array<T>, key: K): T[K][] {
    const result: T[K][] = [];
    for (const item of array) {
        result.push(item[key]);
    }
    return result;
}


const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
];

// 이름 추출
const Peoplenames = pluck(people, 'name');
console.log(Peoplenames); // ['Alice', 'Bob', 'Charlie']

// 나이 추출
const ages = pluck(people, 'age');
console.log(ages); // [25, 30, 35]
