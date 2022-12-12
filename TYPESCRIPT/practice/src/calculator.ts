interface Type {
    value: number,
    add(a: number): void,
    minus(a: number): void,
    multiply(a: number): void,
    divide(a: number): void,
    reset(): void,
    result(a: number): void
}

class Calculator implements Type {
    constructor(public value: number = 0) {}

    add(value: number): Calculator {
        this.value += value;
        return this;
    }
    minus(value: number): Calculator {
        this.value -= value;
        return this;
    }
    multiply(value: number): Calculator {
        this.value *= value;
        return this;
    }
    divide(value: number): Calculator {
        this.value /= value;
        return this;
    }
    reset(): Calculator {
        this.value = 0;
        return this;
    }

    result(value: number): void {
        console.log(value);
    }
}

let calculator = new Calculator();
let num = calculator.add(2).minus(1).multiply(10).divide(2).reset().add(2).value;
calculator.result(num);