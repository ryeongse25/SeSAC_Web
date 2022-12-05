function sum1(a, b) {
    return a + b;
}

function sum2( a:number, b:number ) : number {
    return a + b;
}

// ? -> number or undefined
function sum3( a:number, b?:number ): number {
    return a + b;
}

console.log(sum1(1, 'a'));
console.log(sum2(1, 2));
console.log(sum3(1));

const testfunction = () : string => {
    return 'test';
}

console.log(testfunction());

let person = {name: '코딩온', age: 10};
function getInfo(obj: {name: string, age: number}) {

}
getInfo(person)
interface PersonData {
    readonly name: string;
    age: number;
    nickname?: string
}
function getInfo2(obj: PersonData) {

}
let person2:PersonData = {name: '코딩온', age: 10};
person2.age = person2.age + 1;
// 읽기 전용은 바꿀 수 없음
// person2.name = "dd";

// 함수에 대한 인터페이스
interface login {
    (id: string, pw: string) : boolean
};

let loginUser:login = (id, pw) => {
    return true;
}

interface Book {
    title: string;
    getInfo(): void;
    changeTitle(newTitle: string): void;
}

class MyBook implements Book {
    title = '책';
    getInfo() {
        console.log("정보");
    }
    changeTitle(a) {
        console.log(a);
    }
}

let mybook = new MyBook();
mybook.changeTitle("sss");