// member -> nickname 보내기
socket.emit("member", nickname);

// member_list -> member_list 받기
socket.on("member_list", function(data) {
    $(".member-container").append(data);
})

// info -> socket.id 받기
let id = "";
socket.on("info", function(data) {
    id = data;
})

// newMSG -> 닉네임, 아이디, 메세지 받기
socket.on("newMSG", function(data) {
    let div_container = document.createElement("div");
    let div = document.createElement("div");
    let p = document.createElement("p");

    // 내가 쓴 메세지
    if (data.id == id) {
        $(div_container).addClass("my-chat");
    } else {
        // if (data.id != tmp) {
            $(div_container).append('<img src="/profile_img/sample.png">');
            $(div_container).append('<span>' + data.nickname + '</span>');
            $(div_container).addClass("other-chat");
        // } else {
            // $(div_container).addClass("other-chat");
        // }

        // let tmp = data.id;
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

    if (msg.value == "") {return false;}

    // send -> 아이디, 메세지 보내기
    socket.emit("send", {nickname: nickname, id: id, msg: msg.value});
    msg.value = "";
}