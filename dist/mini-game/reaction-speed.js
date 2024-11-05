var readline2 = require('readline');
var rl2 = readline2.createInterface({
    input: process.stdin,
    output: process.stdout
});
var DEFAULT_COLOR;
function getRandomTiming(len) {
    return Math.floor(Math.random() * len) + 1000;
}
function askInputUser() {
    console.log("당신의 동체시력은 얼마나 대단한지 측정해보아요.");
    rl2.question("이름을 입력해주세요: ", function (name) {
        if (name) {
            reactionSpeedStart(name);
        }
        else {
            console.log("다시 입력해주세요.");
            askInputUser();
        }
    });
}
function reactionSpeedStart(name) {
    rl2.question("".concat(name, "\uB2D8 \uD658\uC601\uD569\uB2C8\uB2E4. \uC2DC\uC791 \uBA85\uB839\uC5B4\uB97C \uC785\uB825\uD558\uC5EC \uAC8C\uC784\uC744 \uC2DC\uC791\uD574\uC8FC\uC138\uC694: "), function (cmd) {
        if (cmd === "시작") {
            reactEnter();
        }
        else {
            console.log("다시 입력해주세요.");
            reactionSpeedStart(name);
        }
    });
}
function reactEnter() {
    console.log("자 그럼 시작합니다. 녹색 밑에 뜨는 순간에 엔터를 눌러주세요.");
    var DEFAULT_COLOR = '🟥';
    process.stdout.write("Color: ".concat(DEFAULT_COLOR, "\r"));
    setTimeout(function () {
        DEFAULT_COLOR = '🟩';
        process.stdout.write("Color: ".concat(DEFAULT_COLOR, "\r"));
        var startTime = Date.now();
        // 엔터 키 입력 감지
        rl2.on("line", function (input) {
            if (input.trim() === "") { // 엔터 키 입력 처리
                var endTime = Date.now();
                var elapsedTime = endTime - startTime; // ms 단위로 경과 시간 계산
                console.log("Enter 키가 눌렸습니다!");
                console.log("\uBC18\uC751 \uC18D\uB3C4: ".concat(elapsedTime, "ms"));
                rl2.close();
            }
        });
    }, getRandomTiming(2000));
}
askInputUser();
