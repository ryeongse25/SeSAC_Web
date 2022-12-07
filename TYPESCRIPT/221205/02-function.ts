/*
function 함수이름(매개변수 : 타입) : 반환 값 타입 {
    코드
}
*/

function sum1(a, b) {
    return a + b;
}

function sum2( a:number, b:number ) : number {
    return a + b;
}

// 문제가 없다
console.log(sum1(1, 'a'));
// 에러가 생긴다
// console.log(sum2(1, 'a'));

// type annotation 앞에 ?를 붙이면 optional하게 된다
function sum3( a:number, b?:number ): number {
    return a + b;
}

// 매개변수 초기화 : b가 없으면 자동으로 10이 들어간다
function sum4( a:number, b=10 ): number {
    return a + b;
}

console.log(sum3(1));
console.log(sum4(1, 3));
console.log(sum4(1));

// 일반 함수
function testfunction1 () : string {
    return "test1";
}

// 화살표 함수
const testfunction2 = () : string => {
    return 'test2';
}

console.log(testfunction1());
console.log(testfunction2());

// 인터페이스
interface Student {
    // 읽기 전용
    readonly name: string,
    age: number,
    // optional
    nickname?: string
}

// Student 인터페이스를 갖는 stu1 변수
let stu1 : Student = {
    name: '이름',
    age: 10
}

let stu2 : Student = {
    name: '이름2',
    age: 20,
    nickname: 'student2'
}

stu1.age = stu1.age + 1;
// 읽기 전용은 바꿀 수 없음
// stu1.name = "dd";

// 클래스에 대한 인터페이스

/* 클래스 정의
class 클래스이름 {
    변수명1: 타입;
    constructor(변수명: 타입, 변수명: 타입) {
        this.변수명1 = 변수명;
    }
}
*/

interface Developer {
    name: string;
    getName(): string;
}

class Developer1 implements Developer {
    readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
}

let dev1 = new Developer1("새싹");
// readonly는 변경 불가
// dev1.name = "SeSAC";
console.log( dev1.getName() );

class Developer2 implements Developer {
    // readonly일 때는 다음과 같이 this.name 없이 사용 가능하다.
    constructor(readonly name: string) {}
    getName(): string {
        return this.name;
    }
}

let dev2 = new Developer2("코딩온");
console.log( dev2.getName() );

// 함수에 대한 인터페이스
interface login {
    (id: string, pw: string) : boolean
};

let loginUser:login = (id, pw) => {
    return true;
}

// 제네릭 (Generics)
// 재사용성을 높이기 위해서
// Array<number> = number[]
// Array<>
// const [age, setAge] = useState<number>(0)

function getText<S>(text:S) : S {
    return text;
}

getText<number>(1);
getText<string>('a');
// 굳이 타입을 쓰지 않아도 된다
getText(1);

// 타입 검사
// primitive type => typeof
// object type => instanceof
let abc = 1;
console.log(typeof(abc));
console.log(dev2 instanceof Developer2);