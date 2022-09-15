window.onload = function() {
    const textbox_container = document.querySelector(".textbox_container");
    const right_container = document.querySelector(".right_container");
    const msgbox_container = document.querySelector(".msg_box");

    textbox_container.removeAttribute('style');

    $(msgbox_container).css("height", (right_container.offsetHeight - textbox_container.offsetHeight - 125) + "px");

    if ( window.innnerWidth > 500 ) {
        $(textbox_container).css("width", (window.innerWidth - 200 - 30) + "px");
    } else {
        $(textbox_container).css("width", (window.innerWidth - 30) + "px");
    }
}

window.onresize = function() {
    const textbox_container = document.querySelector(".textbox_container");
    const right_container = document.querySelector(".right_container");
    const msgbox_container = document.querySelector(".msg_box");

    $(msgbox_container).css("height", (right_container.offsetHeight - textbox_container.offsetHeight - 125) + "px");

    if (window.innerWidth > 500) {
        $(textbox_container).css("width", (window.innerWidth - 200 - 30) + "px");        
    } else {
        $(textbox_container).css("width", (window.innerWidth - 30) + "px");
    }
}