// 그냥 불러오면 콜백 방식, .promises를 붙여주면 promise 방식으로 처리
const fs = require("fs").promises;

// console.log(fs);

// fs.readFile("./test.txt", function(err, data) {
//     if (err) throw err;
//     console.log(data);
//     console.log(data.toString());
// });

fs.readFile('./test.txt')
.then(function(data) {
    console.log(data);
    console.log(data.toString());
})
.catch(function(err) {
    console.error(err);
})

// writeFile(파일명, 쓸 내용)
// fs.writeFile('./write.txt', 'hi')
// .then(() => {
//     console.log("작성 완료");
// })
// .catch((err) => {
//     console.log(err);
// })

// appendFile : 이어서 적기

// copyFile(복사할 파일, 붙여넣을 파일 이름)
// fs.copyFile("./write.txt", "./new.txt")
// .then(() => {
//     console.log("복사완료");
// })
// .catch((err) => {
//     console.log(err);
// })

async function exec() {
    await fs.writeFile("./write.txt", "hello");
    fs.copyFile("./write.txt", "./new.txt");
}

exec();