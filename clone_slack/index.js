const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");
const port = 8000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.render("index");
});

let list = {};

io.on("connection", function(socket) {
    socket.emit("info", socket.id);

    socket.on("info2", function(data) {
        list[socket.id] = data.username;
        // io.emit("members", list);
        io.emit("notice", data.username + "님이 입장하셨습니다.");
    })

    socket.on("send", function(data) {
        // data["is_dm"] = false;
        data["username"] = list[socket.id];
        // if (data.to == "total") {
            io.emit("newMSG", data);
        // } else {
        //     data["is_dm"] = true;
        //     let socketID = Object.keys(list).find( (key) => { return list[key] === data.to; });
        //     console.log(socketID);
        //     io.to(socketID).emit("newMSG", data);
        //     socket.emit("newMSG", data);
        // }
    })

    socket.on("disconnect", function() {
        io.emit("notice", list[socket.id] + "님이 퇴장하셨습니다.");
        delete list[socket.id];
        // io.emit("members", list);
    })
})

http.listen(port, function() {
    console.log("Server port : ", port);
})