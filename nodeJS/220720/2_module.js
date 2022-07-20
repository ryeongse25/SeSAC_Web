const { Car } = require('./2_class.js');

console.log(Car);

let car1 = new Car("red");
console.log(car1.returnColor());
console.log(car1.isDoor);