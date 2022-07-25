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
});

app.get("/receive", function(req, res) {
    console.log(req.body);
    console.log(req.query);
    res.render("receive", req.query);
    // console.log("receive-get");
    // res.render("index");
});

app.post("/receive", function(req, res) {
    console.log(req.body);
    // receive.ejs 보여주기..?
    // req.body의 정보를 보내준다 (dictionary 형태로) 그래서 receove.ejs에서 가져다 쓸 수 있음
    res.render("receive", req.body);
});

app.listen(port, () => {
    console.log("Server Port : ", port);
})