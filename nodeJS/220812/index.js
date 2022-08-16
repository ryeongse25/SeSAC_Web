const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser('1234'));
app.use(session({
    secret: 'secret key',
    // session 덮어쓰기 할 지 말 지
    // resave: false,
    // 초기값을 설정하지 않아도 미리 칸을 만들어 놓을지
    // saveUninitialized: true
}))

// 옵션을 딕셔너리 형태로 보낼 수 있다.
const cookieConfig = {
    // 만료 기간: 30s
    maxAge: 30000,
    // cookie에 접근할 수 있는 시작 경로 -> "/"로 시작하는 경로에서 다 접근 가능
    path: '/',
    // true라고 설정 시 클라이언트에서 document.cookie로 접속 불가. 서버를 통해서만 접근 가능
    // httpOnly: false,
    // 쿠키 암호화 (앞뒤로 문자열이 붇는다)
    // signed: true
};

// app.get("/", function(req, res) {
    // req.session.name = "홍길동";
    // 쿠키 설정(res)
    // res.cookie('today', 'yes', cookieConfig);
    // res.render("index");
// })

// app.get("/get", (req, res) => {
    // console.log(req.session.name);
    // 쿠키 받기(req)
    // console.log(req.cookies);
    // res.send(req.cookies);
// })

// app.get("/cookie", (req, res) => {
    // res.render("cookie");
// })

// app.get("/destroy", (req,res) => {
    // 세션 값 전부 지우기
    // req.session.destroy(function(err) {
    //     res.send("삭제");
    // })
    // 한개의 세션 값만 바꾼다
    // req.session.name = "123";
    // res.send("123");
// })

// app.get("/login", (req, res) => {
    // res.render("login");
// })

// app.post("/login", (req, res) => {
    // let flag = true;
    // if (flag) {
    //     req.session.id = req.body.id;
        // "/profile" 링크로 이동
//         res.redirect("/profile");
//     } else {
//         res.redirect("/login");
//     }
// })

// app.get("/profile", (req, res) => {
    // 비정상적인 로그인
    // if (req.session.id == undefined || req.session.id == "") {
    //     res.redirect("/login");
    //     return false;
    // }
    // 정상적으로 로그인 했을 경우 req.session.id로 데이터베이스에서 정보를 가져올 수 있다.
//     res.render("profile");
// })

app.get("/practice", (req, res) => {
    res.render("practice48");
})

// practice 49
app.get("/practice49/login", (req, res) => {
    res.render("practice49");
})

app.get("/practice49", (req, res) => {
    data = {session: req.session.id};
    res.render("index", data);
})

app.post("/practice49", (req, res) => {
    if (req.body.id == "sese" && req.body.pw == "1234") {
        req.session.id = "sese";
    }
    console.log(req.session.id);
    data = {session: req.session.id, id: req.body.id};
    res.render("index", data);
})

// 서버 열기
app.listen(port, () => {
    console.log("Server Port : ", port);
})