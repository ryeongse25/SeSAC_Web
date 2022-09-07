const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", function(req, res) {
    console.log("client");
    res.sendFile(__dirname + "/practice50.html");
});

let msg = {hello: "안녕하세요!", study: "공부합시다!", bye: "안녕히가세요!"};

io.on("connection", function(socket) {
    console.log("connected");

    socket.on("send", function(data) {
        console.log("clent : ", data);
        socket.emit("response", data + " : " + msg[data]);
    })
})

http.listen(8000, function() {
    console.log("Server port : ", 8000);
})