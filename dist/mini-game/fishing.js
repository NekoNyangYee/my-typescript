"use strict";
var FISH_LIST = {
    SS급: [
        '청새치', '흰수염 고래', '미꾸리'
    ],
    S급: [
        '황금농어', '참치', '킹크랩'
    ],
    A급: [
        '광어', '고등어', '송어'
    ],
    B급: [
        '잉어', '정어리', '멸치'
    ],
    C급: [
        '나뭇가지', '신발', '깡통', '찢어진 우비'
    ]
};
var ranks = ['SS급', 'S급', 'A급', 'B급', 'C급'];
function getFishRandom(num) {
    return Math.floor(Math.random() * num);
}
function resultFish() {
    var randomRank = ranks[getFishRandom(ranks.length)];
    var getFish = FISH_LIST[randomRank];
    var getFishVal = getFish[getFishRandom(getFish.length)];
    if (randomRank === 'SS급') {
        return "\uD5CB \uC815\uB9D0 \uCD95\uD558\uB4DC\uB824\uC694!! \uB2F9\uC2E0\uC740 \uBB3C\uACE0\uAE30 \uC911\uC5D0\uC11C\uB3C4 \uAC00\uC7A5 \uC5BB\uAE30 \uD798\uB4E0 ".concat(randomRank, "\uC5D0\uC11C ").concat(getFishVal, "\uC744 \uC5BB\uC5C8\uC5B4\uC694!!");
    }
    else if (randomRank === 'S급') {
        return "\uCD95\uD558\uB4DC\uB824\uC694!! \uB2F9\uC2E0\uC740 \uBB3C\uACE0\uAE30 \uC911\uC5D0\uC11C\uB3C4 \uC5BB\uAE30 \uD798\uB4E0 ".concat(randomRank, "\uC5D0\uC11C ").concat(getFishVal, "\uC744 \uC5BB\uC5C8\uC5B4\uC694!!");
    }
    else if (randomRank === 'A급' || randomRank === 'B급') {
        return "\uCD95\uD558\uB4DC\uB824\uC694!! \uB2F9\uC2E0\uC740 \uBB3C\uACE0\uAE30 \uC911\uC5D0\uC11C\uB3C4 ".concat(randomRank, "\uC5D0\uC11C ").concat(getFishVal, "\uC744 \uC5BB\uC5C8\uC5B4\uC694!!");
    }
    else {
        return "\uC774\uB7F0! \uADF8\uB798\uB3C4 \uB09A\uC2DC\uB294 \uC131\uACF5\uD588\uC5B4\uC694! ".concat(randomRank, "\uC5D0\uC11C ").concat(getFishVal, "\uC744 \uC5BB\uC5C8\uC5B4\uC694!!");
    }
}
console.log(resultFish());
