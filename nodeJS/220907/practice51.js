const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", function(req, res) {
    console.log("client");
    res.sendFile(__dirname + "/practice51.html");
});

// io -> 클라이언트와의 모든 연결을 갖고 있는 친구
// socket -> 클라이언트 한 명
io.on("connection", function(socket) {
    console.log("connected : ", socket.id);
    // 클라이언트에게 socket.id를 보내준다
    socket.emit("info", socket.id);

    let name = "";
    socket.on("name", function(data) {
        name = data;
        io.emit("entry", data + "님이 입장하셨습니다.");
    })

    socket.on("send", function(data) {
        // data = {id: ~~~, msg: ~~~}
        console.log("client message : ", data.msg);
        io.emit("newMSG", data);
    })

    socket.on("disconnect", function() {
        io.emit("entry", name + "님이 퇴장하셨습니다.");
    })
})

http.listen(8000, function() {
    console.log("Server port : ", 8000);
})