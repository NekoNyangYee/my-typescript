function sort<T>(arrr: Array<T>): Array<T> {
    return arrr.sort();
}

const arr: Array<number> = [1, 3, 2, 4, 5];
const str: Array<string> = ['a', 'c', 'b', 'd', 'e']

console.log(sort(arr));
console.log(sort(str));