"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function randomBlank() {
    return Math.floor(Math.random() * 4);
}
function getRandomPassword() {
    return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
}
function correctPassword() {
    var password = getRandomPassword().toString();
    var blankIndex = randomBlank();
    // 빈칸으로 표시할 비밀번호 생성
    var partialPassword = password
        .split('')
        .map(function (char, index) { return (index === blankIndex ? "_" : char); });
    console.log("\uBE44\uBC00\uBC88\uD638 \uC77C\uBD80: ".concat(partialPassword.join('')));
    askInputPwd(partialPassword, password, blankIndex);
}
function askInputPwd(partialPassword, originalPassword, blankIndex) {
    rl.question("과연 저 빈칸에 들어갈 번호는 무엇일까요?", function (ans) {
        var attempt = partialPassword
            .map(function (char, index) { return (index === blankIndex ? ans : char); })
            .join('');
        if (attempt === originalPassword) {
            console.log("\n            \uC624 \uB9DE\uC558\uC5B4\uC694! \uC815\uB2F5\uC740 ".concat(originalPassword, "\uC600\uC5B4\uC694!    \n            "));
            rl.close();
        }
        else {
            console.log("\n            \uC774\uB7F0 \uB2E4\uC2DC \uC0DD\uAC01\uD574\uC8FC\uC138\uC694..    \n            ");
            askInputPwd(partialPassword, originalPassword, blankIndex);
        }
    });
}
correctPassword();
