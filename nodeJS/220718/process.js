// 현재 파일 이름
console.log(__filename);
// 현재 경로
console.log(__dirname);

// console.log(process.version);
// console.log(process.arch);
// console.log(process.platform);
// console.log(process.uptime());
// console.log(process.execPath);
// console.log(process.cpuUsage());
// console.log(process.env);

const os = require("os");

console.log(os.hostname());

const path = require("path");

const string = __filename;
// 확장자 출력
console.log(path.extname(string));