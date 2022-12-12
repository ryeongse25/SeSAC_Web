class People1 {
    name: string;
    id: string;
    pw: string;
    age: number;
    gender: string;
}

let black: People1 = new People1();

black.name = 'black';
black.id = 'id_black';
black.pw = 'black1234';
black.age = 26;
black.gender = 'male';

console.log(black);