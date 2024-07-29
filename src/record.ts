type Fruit = 'apple' | 'banana' | 'orange';
type FruitInfo = Record<Fruit, { color: string; taste: string }>;
// 제네릭 타입변수 이용해서 과일 콘솔에 찍기
function printFruitInfo<K extends Fruit>(fruit: K, info: FruitInfo[K]): void {
    console.log(`Fruit: ${fruit}, Color: ${info.color}, Taste: ${info.taste}`);
}

const fruitInfo: FruitInfo = {
    apple: { color: 'red', taste: 'sweet' },
    banana: { color: 'yellow', taste: 'sweet' },
    orange: { color: 'orange', taste: 'citrusy' },
};

// 함수 호출 예시
printFruitInfo('apple', fruitInfo.apple);
printFruitInfo('banana', fruitInfo.banana);
printFruitInfo('orange', fruitInfo.orange);