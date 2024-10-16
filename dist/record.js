"use strict";
// 제네릭 타입변수 이용해서 과일 콘솔에 찍기
function printFruitInfo(fruit, info) {
    console.log("Fruit: ".concat(fruit, ", Color: ").concat(info.color, ", Taste: ").concat(info.taste));
}
var fruitInfo = {
    apple: { color: 'red', taste: 'sweet' },
    banana: { color: 'yellow', taste: 'sweet' },
    orange: { color: 'orange', taste: 'citrusy' },
};
// 함수 호출 예시
printFruitInfo('apple', fruitInfo.apple);
printFruitInfo('banana', fruitInfo.banana);
printFruitInfo('orange', fruitInfo.orange);
