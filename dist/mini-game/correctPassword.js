"use strict";
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function firstBlank() {
    return Math.floor(Math.random() * 4);
}
function secondBlank(firstResult) {
    var options = [0, 1, 2, 3].filter(function (num) { return num !== firstResult; });
    return options[Math.floor(Math.random() * options.length)];
}
function getRandomPassword() {
    return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
}
function correctPassword() {
    var password = getRandomPassword().toString();
    var blankFirstIndex = firstBlank();
    var blankSecondIndex = secondBlank(blankFirstIndex);
    var correctNumber = [];
    var partialPassword = password.split('').map(function (char, index) {
        if (index === blankFirstIndex || index === blankSecondIndex) {
            correctNumber.push(Number(char));
            return "_";
        }
        return char;
    });
    console.log("\uBE44\uBC00\uBC88\uD638 \uC77C\uBD80: ".concat(partialPassword.join('')));
    askInputPwd(partialPassword, correctNumber, password);
}
var MY_ATTEMPT = 1;
function askInputPwd(partialPassword, correctNumber, originalPassword) {
    rl.question("과연 저 빈칸에 들어갈 번호는 무엇일까요? (빈칸에 들어갈 숫자들을 공백으로 구분하여 입력하세요) ", function (ans) {
        // 사용자가 입력한 두 숫자를 배열로 변환
        var userInputNumbers = ans.split(' ').map(Number);
        // 사용자의 입력이 correctNumber와 순서와 값 모두 동일한지 확인
        var isCorrect = userInputNumbers.length === correctNumber.length &&
            userInputNumbers.every(function (num, idx) { return num === correctNumber[idx]; });
        if (isCorrect) {
            MY_ATTEMPT += 1;
            console.log("\n            \uC624 \uB9DE\uC558\uC5B4\uC694! \uC815\uB2F5\uC740 ".concat(originalPassword, "\uC600\uC5B4\uC694!\n            \uB098\uC758 \uCD1D \uC2DC\uB3C4 \uD69F\uC218: ").concat(MY_ATTEMPT, "    \n            "));
            rl.close();
        }
        else {
            MY_ATTEMPT += 1;
            if (MY_ATTEMPT === 10) {
                console.log("\n                \uC774\uB7F0... ".concat(MY_ATTEMPT, "\uBC88 \uBAA8\uB450 \uC2DC\uB3C4 \uD588\uC9C0\uB9CC \uC815\uB2F5\uC744 \uB9DE\uD788\uC9C0 \uBABB\uD588\uC5B4\uC694...\n\n                \uC815\uB2F5\uC740 ").concat(originalPassword, " \uC774\uC5D0\uC694...\n                "));
                rl.close();
            }
            else {
                MY_ATTEMPT += 1;
                console.log("\n                    ".concat(correctNumber.join(' '), "\n                    \uD2C0\uB838\uC5B4\uC694! \uD78C\uD2B8\uB3C4 \uC0AC\uC6A9\uAC00\uB2A5\uD558\uB2C8 \uB2E4\uC2DC \uC0DD\uAC01\uD574\uBCF4\uC138\uC694!!\n                    \uB098\uC758 \uCD1D \uC2DC\uB3C4 \uD69F\uC218: ").concat(MY_ATTEMPT, "\n                "));
                askInputPwd(partialPassword, correctNumber, originalPassword);
            }
        }
    });
}
correctPassword();
