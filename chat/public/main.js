function pressEnter() {
    if (window.event.keyCode == 13) {
        $("#name_form").submit();
    }
}

function imgPreview() {
    let file = document.getElementById("profile");
    let img = document.querySelector("label img");

    console.log(file.files);

    if (file.files.length > 0) {
        let reader = new FileReader();

        reader.onload = function(data) {
            img.src = data.target.result;
        }

        reader.readAsDataURL(file.files[0]);
    } else {
        img.src = "/profile_img/sample.png";
    }
}