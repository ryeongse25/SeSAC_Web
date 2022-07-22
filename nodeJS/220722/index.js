const express = require("express");
const app = express();
const port = 8000;

// 확장자가 ejs인 파일들을 사용할 것이고, views 폴더 안에 위치한다.
app.set('view engine', 'ejs');

// 정적 파일 관리하는 방법
// 'public': 정적 파일을 관리하는 폴더 이름
// '/abc' -> 접근하는 가상 경로
// 없으면 localhost:8000/이미지 파일 (public에서 찾는다)
// 있으면 localhost:8000/abc/이미지 파일
app.use('/abc', express.static('public'));

// 나누는 이유는 여러 사람들이 일할 때 정의하기 위해서
// get: 요청 할 때 / 주소에 query가 있으면 ?= get 방식
// post: 생성할 때, (회원가입 등등) 주소에 정보가 안보인다.
// put: 수정할 때, a라는 객체를 보내면 처음부터 끝까지 다 바꾼다. 안보낸 값은 다 없어진다.
// patch: 수정할 때, 보낸 값만 바뀐다.

// '/a' -> localhost:8000/a
app.get('/', (req, res) => {
    // res.send('Hello Express!');

    //  rendering: data를 html로 변환해서 전달한다
    // 위에서 ejs파일을 사용하겠다고 명시해주었기 때문에, 확장자를 안적어도 된다.
    // 딕셔너리 형태로 백엔드에서 프론트로 보낼 수 있다.
    let list = ['apple', 'banana'];
    res.render("test", {list: list});
});

app.listen(port, () => {
    console.log('Server port : ', port);
})