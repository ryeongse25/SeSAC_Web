function App() {
  return (
    <div>

    </div>
  );
}

export default App;

// class: 붕어빵 틀과 같은 것
class Shape {

  constructor(w, h) {
    this.w = w;
    this.h = h;
  }

  getArea() {
    return this.w * this.h;
  }
}

// Square가 Shape의 constructor와 method를 상속 받음
class Square extends Shape {}

class Triangle extends Shape{
  // constructor는 덮어쓸 수 없다.
  constructor(x, y, name) {
    // 부모의 구조체 호출
    super(x, y);
    this.name = name;
  }
  // 함수는 새로 선언 가능 (Overriding)
  getArea() {
    return this.w * this.h / 2;
  }
}

let shape1 = new Shape(5, 4);
console.log(shape1.getArea());

let shape2 = new Shape(2, 3);
console.log(shape2.getArea());

let shape3 = new Square(4, 8);
console.log(shape3.getArea());

let shape4 = new Triangle(5, 6, 'test');
console.log(shape4.getArea());