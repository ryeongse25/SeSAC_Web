const express = require("express");
const { send } = require("process");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", function(req, res) {
    console.log("client");
    res.sendFile(__dirname + "/practice51.html");
});

let list = {};

// io -> 클라이언트와의 모든 연결을 갖고 있는 친구
// socket -> 클라이언트 한 명
io.on("connection", function(socket) {
    console.log("connected : ", socket.id);
    // 클라이언트에게 socket.id를 보내준다
    socket.emit("info", socket.id);

    socket.on("info2", function(data) {
        list[socket.id] = data.username;
        io.emit("members", list);
        io.emit("notice", data.username + "님이 입장하셨습니다.");
    })

    socket.on("send", function(data) {
        // data = {msg: ~~~, to: ~~~}
        console.log("client message : ", data.msg);
        data["is_dm"] = false;
        data["username"] = list[socket.id];
        // data = {msg: ~~~, to: ~~~, is_dm: ~~~, username: ~~~}
        // total이라는 닉네임을 가진 유저한테는 보낼 수 없음
        if (data.to == "total") {
            io.emit("newMSG", data);
        } else {
            data["is_dm"] = true;
            let socketID = Object.keys(list).find( (key) => { return list[key] === data.to; });
            console.log(socketID);
            io.to(socketID).emit("newMSG", data);
            // 나한테도 보내기
            socket.emit("newMSG", data);
        }
    })

    socket.on("disconnect", function() {
        io.emit("notice", list[socket.id] + "님이 퇴장하셨습니다.");
        delete list[socket.id];
        // io.emit("members", list);
    })
})

http.listen(8080, function() {
    console.log("Server port : ", 8080);
})