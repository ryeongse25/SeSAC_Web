// const os = require("os");
// const path = require("path");

// console.log("사용 가능한 메모리(RAM): ", os.freemem());
// console.log("전체 메모리 용량: ", os.totalmem());
// console.log("홈 디렉토리 경로: ", os.homedir());
// console.log("");

// const string = __filename;

// console.log("경로 구분자: ", path.sep);
// console.log("현재 파일의 확장자: ", path.extname(string));
// console.log("현재 파일의 경로를 분리해서 출력: ", path.parse(string));

const url = require("url");

// 모듈 구조 분해로 가져오기
const {URL} = url;
console.log({URL});

const string = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sesac"

const naver = new URL(string);

console.log(naver.searchParams.keys());
console.log(naver.searchParams.values());
naver.searchParams.delete('sm');
console.log(naver.searchParams.keys());