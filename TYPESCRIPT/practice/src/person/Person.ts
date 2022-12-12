import IPerson from "./IPerson";
import { makeRandomNumber } from "../utils/makeRandomNumber";

// 이렇게 가져올 수도 있음
// import * as U from "../utils/makeRandomNumber";
// U.makeRandomNumber() 이렇게 사용하기

class Person implements IPerson {
    constructor(public name: string, public age: number) {}
}

export const makePerson = (name: string, age: number = makeRandomNumber()) => ({name, age})

// 위와 같음
const makePerson2 = (name: string, age: number = makeRandomNumber()) => {
    return { name, age };
}