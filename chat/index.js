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
    res.render("chat",  {nickname: req.body.nickname});
});

io.on("connection", function(socket) {
    // info -> socket.id 보내주기
    socket.emit("info", socket.id);

    // send -> 닉네임, 아이디, 메세지 받기
    socket.on("send", function(data) {
        // newMSG -> 닉네임, 아이디, 메세지 보내기
        io.emit("newMSG", data);
    })

    let nickname="";
    // name -> nickname 받기
    socket.on("name", function(data) {
        nickname = data;
        // notice -> 입장 문구 보내기
        io.emit("notice", data + "님이 입장하셨습니다.");
    })

    socket.on("disconnect", function() {
        // disconnect -> 퇴장 문구 보내기
        io.emit("notice", nickname + "님이 퇴장하셨습니다.");
    })

    let member_list = [];
    socket.on("member", function(data) {
        member_list.push(data);
        io.emit("member_list", member_list);
    })
})

http.listen(port, function() {
    console.log("Server port : ", port);
})