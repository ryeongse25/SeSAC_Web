function pressEnter() {
    let msg = document.getElementById("message");
    if (window.event.keyCode == 13) {
        if ( msg.value == "" ) { window.event.preventDefault(); return false; }
        if ( !window.event.shiftKey ) { btnSend(); window.event.preventDefault(); }
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

function imgPreview() {
    // input[type="file"] 태그
    let file = document.getElementById("upload_profile_img");
    // 이미지를 넣을 태그
    let img = document.querySelector(".profile_header img");
    let nav_img = document.querySelector(".profile_icon img");

    if (file.files.length > 0) {
        let reader = new FileReader();

        reader.onload = function(data) {
            img.src = data.target.result;
            nav_img.src = data.target.result;
        }
        reader.readAsDataURL(file.files[0]);
    } else {
        img.src = "/profile_img/sample.png";
    }
}

function dropdown(target) {
    $(target).toggleClass("hide");
}