class Cat {
    constructor(readonly name : string) {}
    sayHello() : string {
        return "야옹";
    }
}

class Fish {
    constructor(readonly name : string) {}
    dive(m : number) : string {
        return m + "m 다이빙 했습니다.";
    }
}

type Pet = Cat | Fish;

const talkPet = ( pet:Pet ) : string => {
    if (pet instanceof Cat) return pet.sayHello();
    else return "물고기는 말을 하지 못합니다.";
}

let cat:Pet = new Cat("고양이");
let fish:Pet = new Fish("물고기");

console.log(talkPet(cat));
console.log(talkPet(fish));

