import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function randomBlank() {
    return Math.floor(Math.random() * 4);
}

function getRandomPassword(): number {
    return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
}

function correctPassword() {
    const password: string = getRandomPassword().toString();
    const blankIndex: number = randomBlank();

    // 빈칸으로 표시할 비밀번호 생성
    const partialPassword: string[] = password
        .split('')
        .map((char, index) => (index === blankIndex ? "_" : char));

    console.log(`비밀번호 일부: ${partialPassword.join('')}`);
    askInputPwd(partialPassword, password, blankIndex);
}

function askInputPwd(partialPassword: string[], originalPassword: string, blankIndex: number) {
    rl.question("과연 저 빈칸에 들어갈 번호는 무엇일까요?", ans => {
        const attempt: string = partialPassword
            .map((char: string, index: number) => (index === blankIndex ? ans : char))
            .join('');

        if (attempt === originalPassword) {
            console.log(`
            오 맞았어요! 정답은 ${originalPassword}였어요!    
            `);
            rl.close();
        } else {
            console.log(`
            이런 다시 생각해주세요..    
            `);
            askInputPwd(partialPassword, originalPassword, blankIndex);
        }
    });
}

correctPassword();
