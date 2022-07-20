let list = ['apple', 'banana'];

// let item1 = list[0];
// let item2 = list[1];

// [item1, item2, item3] = list;
[item1, item2 = 'peach', item3 = 'melon'] = list;

console.log("item1 : ", item1);
console.log("item2 : ", item2);
console.log("item3 : ", item3);

let x = 1, y = 3;

// let temp = x;
// x = y;
// y = temp;

[y, x] = [x, y];
console.log(x, y);