// js 동작 채우기

function showMenu() {
    if ( $(".slide_menu").hasClass("slide_menu_item") ) {
        $(".slide_menu").removeClass("hideAnimation");
        $(".slide_menu").removeClass("slide_menu_item");
        $(".slide_menu").addClass("showAnimation");
    } else {
        $(".slide_menu").removeClass("showAnimation");
        $(".slide_menu").addClass("hideAnimation");
        $(".slide_menu").addClass("slide_menu_item");
    }
}