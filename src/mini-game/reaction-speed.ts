const readline2 = require('readline');

const rl2 = readline2.createInterface({
    input: process.stdin,
    output: process.stdout
});

let DEFAULT_COLOR: string = '🟥';

function getRandomTiming(len: number): number {
    return Math.floor(Math.random() * len) + 1000;
}

function askInputUser(): void {
    console.log("당신의 동체시력은 얼마나 대단한지 측정해보아요.");
    rl2.question("이름을 입력해주세요: ", (name: string) => {
        if (name.trim()) {
            reactionSpeedStart(name);
        } else {
            console.log("다시 입력해주세요.");
            askInputUser();
        }
    });
}

function reactionSpeedStart(name: string): void {
    rl2.question(`${name}님 환영합니다. 시작 명령어를 입력하여 게임을 시작해주세요: `, (cmd: string) => {
        if (cmd.trim() === "시작") {
            reactEnter();
        } else {
            console.log("다시 입력해주세요.");
            reactionSpeedStart(name);
        }
    });
}

function reactEnter(): void {
    console.log("자 그럼 시작합니다. 녹색 밑에 뜨는 순간에 엔터를 눌러주세요.");
    process.stdout.write(`Color: ${DEFAULT_COLOR}\r`);

    let inputHandled = false;

    // setTimeout ID를 저장할 변수
    let colorChangeTimer: NodeJS.Timeout;

    const handleLine = (input: string) => {
        if (inputHandled) return;

        if (input.trim() === "") {
            if (DEFAULT_COLOR === '🟥') {
                console.log("빨간색일 때는 엔터를 누르지 마세요.");
                inputHandled = true;
                clearTimeout(colorChangeTimer);  // setTimeout 취소
                rl2.removeListener('line', handleLine);
                rl2.close();
                return;
            }
            if (DEFAULT_COLOR === '🟩') {
                const endTime: number = Date.now();
                const elapsedTime: number = endTime - startTime;
                console.log("Enter 키가 눌렸습니다!");
                console.log(`반응 속도: ${elapsedTime}ms`);
                inputHandled = true;
                rl2.removeListener('line', handleLine);
                rl2.close();
            }
        }
    };

    rl2.on("line", handleLine);

    let startTime: number;
    colorChangeTimer = setTimeout(() => {
        DEFAULT_COLOR = '🟩';
        process.stdout.write(`Color: ${DEFAULT_COLOR}\r`);
        startTime = Date.now();
    }, getRandomTiming(2000));
}

askInputUser();