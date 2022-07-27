const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const fs = require("fs").promises;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.render("practice33");
})

app.get("/login", function(req, res) {
    res.render("login");
})

app.get("/receive", function(req, res) {
    console.log(req.query);
    res.send(req.query);
})

app.post("/receive", function(req, res) {
    console.log(req.body);

    let id = req.body.name;
    let pw = req.body.password;

    fs.readFile("info.txt")
    .then(function(data) {

        data = data.toString().split("//");

        let right_id = data[0];
        let right_pw = data[1];

        if (id == right_id && pw == right_pw) {
            res.send(true);
        } else {
            res.send(false);
        }
    })
})

app.listen(port, () => {
    console.log("Server Port : ", port);
})