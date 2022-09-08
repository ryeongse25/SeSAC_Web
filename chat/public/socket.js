// info -> socket.id 받기
let id = "";
socket.on("info", function(data) {
    id = data;
})

// newMSG -> 아이디, 메세지 받기
socket.on("newMSG", function(data) {
    let div_container = document.createElement("div");
    let div = document.createElement("div");

    // 내가 쓴 메세지
    if (data.id == id) {
        $(div_container).addClass("my-chat");
    } else {
        $(div_container).append('<img src="/profile.png">');
        $(div_container).addClass("other-chat");
    }
    
    div.innerText = data.msg;
    $(div_container).append(div);
    $("#msg-box").append(div_container);
})

// notice -> 문구 받기
socket.on("notice", function(data) {
    let div_container = document.createElement("div");
    let div = document.createElement("div");
    $(div_container).addClass("notice");
    div.innerText = data;
    $(div_container).append(div);
    $("#msg-box").append(div_container);
})

function btnSend() {
    let msg = document.getElementById("message");
    // send -> 아이디, 메세지 보내기
    socket.emit("send", {id: id, msg: msg.value});
    msg.value = "";
}