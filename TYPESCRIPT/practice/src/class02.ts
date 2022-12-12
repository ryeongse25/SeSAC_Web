interface People {
    name: string,
    id: string,
    pw: string,
    age: number,
    gender: string
}

class People2 implements People {
    constructor(public name: string, public id: string, public pw: string, public age: number, public gender: string) {}
}

let green: People2 = new People2('green', 'id_green', 'green1234', 60, 'male');

console.log(green);