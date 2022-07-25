const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.render("practice30");
});

app.get("/practice30_receive", function(req, res) {
    console.log(req.query);
    res.render("practice30_receive", req.query);
});

app.post("/practice30_receive", function(req, res) {
    console.log(req.body);
    res.render("practice30_receive", req.body);
});

app.listen(port, () => {
    console.log("Server Port : ", port);
})