function menu() {
    // if ( $(".side-container").hasClass("slide_menu_item") ) {
    //     $(".side-container").removeClass("hideAnimation");
    //     $(".side-container").removeClass("slide_menu_item");
    //     $(".side-container").addClass("showAnimation");
    // } else {
    //     $(".side-container").removeClass("showAnimation");
    //     $(".side-container").addClass("hideAnimation");
    //     $(".side-container").addClass("slide_menu_item");
    // }
    $(".side-container").toggleClass("hide");
}

function pressEnter() {
    if (window.event.keyCode == 13) {
        btnSend();
    }
}