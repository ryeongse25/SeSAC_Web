const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = 8000;
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.render("index");
});

app.post("/chat", function(req, res) {
    console.log(req.body);
    res.render("chat",  {nickname: req.body.nickname});
});

// io.on("connection", function(socket) {
//     console.log("connected : ", socket.id);
//     socket.emit("info", socket.id);

//     let name = "";
//     socket.on("name", function(data) {
//         name = data;
//         io.emit("entry", data + "님이 입장하셨습니다.");
//     })

//     socket.on("send", function(data) {
//         console.log("client message : ", data.msg);
//         io.emit("newMSG", data);
//     })

//     socket.on("disconnect", function() {
//         io.emit("entry", name + "님이 퇴장하셨습니다.");
//     })
// })

http.listen(port, function() {
    console.log("Server port : ", port);
})