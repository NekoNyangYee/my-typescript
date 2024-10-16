const FISH_LIST = {
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
} as const;

type Fish_Rank = 'SS급' | 'S급' | 'A급' | 'B급' | 'C급';

const ranks: Array<Fish_Rank> = ['SS급', 'S급', 'A급', 'B급', 'C급'];

function getFishRandom(num: number): number {
    return Math.floor(Math.random() * num);
}

function resultFish() {
    const randomRank: Fish_Rank = ranks[getFishRandom(ranks.length)];
    const getFish = FISH_LIST[randomRank];
    const getFishVal = getFish[getFishRandom(getFish.length)];

    if (randomRank === 'SS급') {
        return `헋 정말 축하드려요!! 당신은 물고기 중에서도 가장 얻기 힘든 ${randomRank}에서 ${getFishVal}을 얻었어요!!`;
    } else if (randomRank === 'S급') {
        return `축하드려요!! 당신은 물고기 중에서도 얻기 힘든 ${randomRank}에서 ${getFishVal}을 얻었어요!!`;
    } else if (randomRank === 'A급' || randomRank === 'B급') {
        return `축하드려요!! 당신은 물고기 중에서도 ${randomRank}에서 ${getFishVal}을 얻었어요!!`
    } else {
        return `이런! 그래도 낚시는 성공했어요! ${randomRank}에서 ${getFishVal}을 얻었어요!!`
    }
}

console.log(resultFish());