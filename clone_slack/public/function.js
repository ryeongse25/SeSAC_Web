function pressEnter() {
    if (window.event.keyCode == 13) {
        btnSend();
    }
}

function showProfile() {
    $(".profile").toggleClass("hide");
}

function left() {
    $("#message").css("text-align", "left");
}

function center() {
    $("#message").css("text-align", "center");
}

function right() {
    $("#message").css("text-align", "right");
}