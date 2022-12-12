let alphabets: string[] = ['a', 'b', 'c'];
let numbers: number[] = [1, 2, 3];

for (let index in alphabets) {
    const alphabet = alphabets[index];
    console.log(`[${index}]: ${alphabet}`);
}

for (let alphabet of alphabets) {
    console.log(alphabet);
}

let func = <T>(array:T[]) => {

}

func<string>(['a','nb']);
func<number>([1,2,3]);