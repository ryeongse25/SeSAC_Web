const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", function(req, res) {
    console.log("client");
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
    console.log("connected");
    // emit -> write (이벤트 명, 데이터)
    socket.emit("hello", "server hello");
    socket.on("click", function(data) {
        console.log("client click");
        // 소켓으로 보내면 지금 접속한 클라이언트한테만 보내고
        socket.emit("clickResponse", "success");
        // io로 보내면 접속해있는 모든 클라이언트한테 보낸다
        io.emit("clickResponse", "io success");
    })
})

http.listen(8000, function() {
    console.log("Server port : ", 8000);
})