// 모듈 하나만 가져올 때는 이름이 달라도 상관 없음
// returnString = connect 함수
const returnString = require("./func.js");

// 여러 개를 가져올 때는 같은 이름으로 가져와야 한다. (구조 분해)
const { a, b } = require("./variable.js");

console.log(returnString());