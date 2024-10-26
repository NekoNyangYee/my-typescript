const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function firstBlank() {
    return Math.floor(Math.random() * 4);
}

function secondBlank(firstResult: number) {
    let options: number[] = [0, 1, 2, 3].filter(num => num !== firstResult);
    return options[Math.floor(Math.random() * options.length)];
}

function getRandomPassword(): number {
    return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
}

function correctPassword() {
    const password: string = getRandomPassword().toString();
    const blankFirstIndex: number = firstBlank();
    const blankSecondIndex: number = secondBlank(blankFirstIndex);
    let correctNumber: number[] = [];

    const partialPassword: string[] = password.split('').map((char, index) => {
        if (index === blankFirstIndex || index === blankSecondIndex) {
            correctNumber.push(Number(char));
            return "_";
        }
        return char;
    });

    console.log(`비밀번호 일부: ${partialPassword.join('')}`);
    askInputPwd(partialPassword, correctNumber, password);
}

let MY_ATTEMPT: number = 1;

function askInputPwd(partialPassword: string[], correctNumber: number[], originalPassword: string) {
    rl.question("과연 저 빈칸에 들어갈 번호는 무엇일까요? (빈칸에 들어갈 숫자들을 공백으로 구분하여 입력하세요) ", (ans: string) => {
        // 사용자가 입력한 두 숫자를 배열로 변환
        const userInputNumbers = ans.split(' ').map(Number);

        // 사용자의 입력이 correctNumber와 순서와 값 모두 동일한지 확인
        const isCorrect = userInputNumbers.length === correctNumber.length &&
            userInputNumbers.every((num: number, idx: number) => num === correctNumber[idx]);

        if (isCorrect) {
            MY_ATTEMPT += 1;
            console.log(`
            오 맞았어요! 정답은 ${originalPassword}였어요!
            나의 총 시도 횟수: ${MY_ATTEMPT}    
            `);
            rl.close();
        } else {
            MY_ATTEMPT += 1;
            if (MY_ATTEMPT === 10) {
                console.log(`
                이런... ${MY_ATTEMPT}번 모두 시도 했지만 정답을 맞히지 못했어요...

                정답은 ${originalPassword} 이에요...
                `);
                rl.close();
            } else {
                MY_ATTEMPT += 1;
                console.log(`
                    ${correctNumber.join(' ')}
                    틀렸어요! 힌트도 사용가능하니 다시 생각해보세요!!
                    나의 총 시도 횟수: ${MY_ATTEMPT}
                `);
                askInputPwd(partialPassword, correctNumber, originalPassword);
            }
        }
    });
}

correctPassword();
