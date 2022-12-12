const result = (callback: (number) => void): void => {
    const add = (a: number, b: number, c: number): number => {
        return a + b + c;
    }
    const calAvg = (total: number, num: number = 3): number => {
        return total / num;
    }

    let avg: number = calAvg(add(80, 100, 90));

    callback(avg);
}

result((avg: number) => console.log(`My mid-term average score is ${avg}`));