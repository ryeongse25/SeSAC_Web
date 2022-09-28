function Practice62() {}


class Student {

    constructor(name, school, age, num) {
        this.name = name;
        this.school = school;
        this.age = age;
        this.num = num;
    }
    getInfo() {
        return this.name + "," + this.school + "," + this.age + "," + this.num;
    }
}

class Kim extends Student {};
class Lee extends Student {};

let kim1 = new Kim('김세령', '새싹', '26', '11111111');
let kim2 = new Kim('김모씨', '새싹', '20','33333333');
console.log(kim1.getInfo());
console.log(kim2.getInfo());

let lee = new Kim('이세령', '새싹', '126', '22222222');
console.log(lee.getInfo());

export default Practice62;