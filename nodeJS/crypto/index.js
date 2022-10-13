const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

const user = require("./controller/UserController");

app.get("/", user.main);
app.post("/login", user.register);
app.get("/login", user.loginPage);
app.post("/main", user.postLogin);

app.listen(port, () => {
    console.log("Server Port : ", port);
})