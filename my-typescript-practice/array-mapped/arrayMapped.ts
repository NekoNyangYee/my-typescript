
function mapArray<T, U>(array: T[], transform: (item: T) => U): U[] {
    const result: U[] = [];
    for (const item of array) {
        result.push(transform(item));
    }
    return result;
}

const numbers = [1, 2, 3, 4];

// 숫자를 문자열로 변환
const stringNumbers = mapArray(numbers, (num) => num.toString());
console.log(stringNumbers); // ['1', '2', '3', '4']

const names = ['Alice', 'Bob', 'Charlie'];

// 이름의 길이를 반환
const nameLengths = mapArray(names, (name) => name.length);
console.log(nameLengths); // [5, 3, 7]
