// 변수이름 : 타입 표기 ( Type Annotation ) = '값'

// string
let str: string = "hi";

// number
let num: number = 1;

// boolean
let flag: boolean = true;

// union - 여러 타입 지정 가능
let age: number | string;
age = 10;
age = 'a';

// any : 모든 타입 허용
let any: any;

// array
let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: string[] = ['a', 'b', 'c', 'd'];
let arr3: Array<number> = [1, 2, 3, 4, 5];

// Tuple : 길이와 타입을 바꿀 수 없음
let arr4: [string, number] = ['str', 1];

// Enum: 특정한 값의 집합을 만든다
enum Names {홍길동, 코딩온, 새싹};
let name1: Names = Names.홍길동;
name1 = Names.코딩온;

// void
// 함수 : 반환값이 없는 친구 / 변수 undefined와 null만 들어갈 수 있다.
let void1: void = undefined;
function void2(): void {
    console.log('11');
}


// never
// 함수에 사용. 함수의 끝에 절대 도달하지 않는다
function neverEnd(): never {
    while(true) {

    }
}

let test: any;
test = 1;
test = [1, 2, 3];

// 기본 타입을 제외한 나머지 모두 (array, tuple)
let test2: object;
// 오류
// test2 = 1;
test2 = [1, 2, 3];