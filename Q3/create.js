const fs = require('fs');
const path = require('path');
const logsDir = path.join(__dirname, 'Logs');

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

process.chdir(logsDir);

for (let i = 1; i < 10; i++) {
    const logFileName = `log${i}.txt`;
    fs.writeFileSync(logFileName, `This is log file number ${i}`);
    console.log(`Created file: ${logFileName}`);
}
