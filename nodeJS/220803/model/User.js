const fs = require("fs").promises;

exports.post_user = function(data) {
    console.log(data);
    const {id, pw, name, age} = data;
    let user_info = id + "//" + pw + "//" + name + "//" + age + "\n";
    fs.appendFile("info.txt", user_info)
    .catch((err) => {
        fs.writeFile("info.txt", user_info);
    });
}

exports.get_user = async function() {
    let data = await fs.readFile("./info.txt");
    return data.toString();
}

exports.modify_user = async function(data) {
    let info_content = await fs.readFile("./info.txt");
    info_content = info_content.toString();
    info_content = info_content.replace(data.origin_id, data.id);
    info_content = info_content.replace(data.origin_pw, data.pw);
    await fs.writeFile("info.txt", info_content);
    fs.rename("/uploads/a.jpeg", "/uploads/newa.jpeg");
}

exports.delete_user = async function(data) {
    let info_content = await fs.readFile("./info.txt");
    info_content = info_content.toString();
    info_content = info_content.split("\n");
    console.log(info_content);
    for (let i=0; i<info_content.length; i++) {
        if (info_content[i].startsWith(data.id + "//")) {
            info_content.splice(i, 1);
        }
    }
    let text = ""
    for (let i=0; i<info_content.length; i++) {
        text += info_content[i] + "\n";
    }
    fs.writeFile("info.txt", text);
}