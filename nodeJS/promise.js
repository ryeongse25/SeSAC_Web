const func1 = new Promise((resolve, reject) => {
    let flag = true;
    if (flag) resolve("성공");
    else reject("실패");
})

// 성공했을 때 return값
func1.then(value => {
    console.log(value + "1");
// '성공1'
}).then(result => {
    console.log(result);
// '실패
}).catch(err => {
    console.log(err);
});