/*
function 함수이름(매개변수 : 타입) : 반환 값 타입 {
    코드
}
*/
function sum1(a, b) {
    return a + b;
}
function sum2(a, b) {
    return a + b;
}
// 문제가 없다
console.log(sum1(1, 'a'));
// 에러가 생긴다
// console.log(sum2(1, 'a'));
// type annotation 앞에 ?를 붙이면 optional하게 된다
function sum3(a, b) {
    return a + b;
}
// 매개변수 초기화 : b가 없으면 자동으로 10이 들어간다
function sum4(a, b = 10) {
    return a + b;
}
console.log(sum3(1));
console.log(sum4(1, 3));
console.log(sum4(1));
// 일반 함수
function testfunction1() {
    return "test1";
}
// 화살표 함수
const testfunction2 = () => {
    return 'test2';
};
console.log(testfunction1());
console.log(testfunction2());
let person = { name: '코딩온', age: 10 };
function getInfo(obj) {
}
getInfo(person);
function getInfo2(obj) {
}
let person2 = { name: '코딩온', age: 10 };
person2.age = person2.age + 1;
;
let loginUser = (id, pw) => {
    return true;
};
class MyBook {
    constructor() {
        this.title = '책';
    }
    getInfo() {
        console.log("정보");
    }
    changeTitle(a) {
        console.log(a);
    }
}
let mybook = new MyBook();
mybook.changeTitle("sss");
