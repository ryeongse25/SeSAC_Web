// 클래스명은 보통 대문자로 시작
class Cat {
    // 클래스의 속성을 받는다
    constructor(name) {
        this.name = name;
    }

    // 매서드
    mew() {
        console.log(this.name + " 야옹");
    }
}

// 객체 생성
let cat1 = new Cat("나비");
let cat2 = new Cat("냥이");
console.log(cat1);
cat1.mew();
cat2.mew();

class Car {
    constructor(color) {
        this.color = color;
        this.isWheel = true;
        this.isDoor = true;
    }
    go() {
        console.log("전진");
    }
    back() {
        console.log("후진");
    }
    returnColor() {
        return this.color;
    }
}

module.exports = { Car };