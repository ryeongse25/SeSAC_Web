const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.render("index");
})

app.get("/test", function(req, res) {
    // res.send로 클라이언트한테 글자를 보냈으니까 글자를 보여준다.
    res.send("test");
})

app.get("/test2", function(req, res) {
    // res.send로 클라이언트한테 글자를 보냈으니까 글자를 보여준다.
    res.send({name: "test2", message: 123});
})

app.post("/receive", function(req, res) {
    console.log(req.body);

    // res.send: 데이터를 보내준다. - promise 함수의 response의 data로 받는다.
    // req.body는 axios의 데이터 부분
    // 그래서 send로 보낸 값은 response의 데이터로 들어가지만 req.body가 변하지는 않는다
    // res.send(req.body.name + " 안녕");
    // res.send로 그냥 데이터를 보냈을 뿐인데, axios를 사용하면 axios함수가 response의 data로 보내준 것이다.
    let name = req.body.name;
    let msg = req.body.name + " hi";
    res.send({name: name, message: msg});
})

app.get("/receive", function(req, res) {
    console.log(req.query);
    let name = req.query.name;
    let msg = req.query.name + " GET Hi";
    res.send({name: name, message: msg});
})

app.listen(port, () => {
    console.log("Server Port : ", port);
})