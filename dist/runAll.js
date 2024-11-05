const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// dist/mini-game 폴더 경로
const directoryPath = path.join(__dirname, 'mini-game');

// 실행하려는 파일 이름을 커맨드라인 인자로 받음
const targetFile = process.argv[2];

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory:', err);
    }

    // .js 파일만 필터링하여 리스트 작성
    const jsFiles = files.filter(file => file.endsWith('.js'));

    if (targetFile) {
        // 특정 파일만 실행
        if (jsFiles.includes(targetFile)) {
            exec(`node ${path.join(directoryPath, targetFile)}`, (err, stdout, stderr) => {
                if (err) {
                    console.error(`Error executing ${targetFile}:`, err);
                    return;
                }
                if (stderr) console.error(stderr);
                console.log(stdout);
            });
        } else {
            console.log(`File "${targetFile}" not found in ${directoryPath}`);
        }
    } else {
        // 인자가 없으면 입력하고 싶은 파일 실행하라는 경고 문구 띄움
        console.log('Please specify a file to run.');
    }
});
