const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("uploads"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

// index.js는 파일명 생략 가능
const userRouter = require("./routes/user");
const profileRouter = require("./routes/profile");

// "/user" 라는 주제로 묶인 경로로 접속할 시 ( localhost:포트/user/ )
// userRouter = ./routes/user 에 선언되어 있는 대로 동작한다.
app.use("/user", userRouter);
app.use("/profile", profileRouter); 

app.listen(port, () => {
    console.log("Server Port : ", port);
})

// 이렇게 나누게 되면 같은 경로끼리 묶을 수 있다.
// app.use("/user", router변수명) : user에 관한 경로라고 추측 가능