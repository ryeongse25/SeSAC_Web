// 컨트롤러는 모델과 뷰를 연결시켜주는 역할
// 직접적으로 데이터에 접근하지는 않는다

const User = require("../model/User");

exports.index = (req, res) => {
    res.render("index");
}

exports.register = (req, res) => {
    res.render("register");
}

exports.post_register = (req, res) => {
    User.post_user(req.body);
    res.send(req.body);
}

exports.login = (req, res) => {
    res.render("login");
}

exports.post_login = async (req, res) => {
    let data = await User.get_user();
    let infos = data.split("\n");

    info = [];

    for (let i = 0; i < infos.length; i++) {
        info.push(infos[i].split("//"));
    }

    // let msg = "";

    // for (let i = 0; i < info.length; i++ ) {
    //     if (req.body.id == info[i][0]) {
    //         if ( req.body.pw == info[i][1]) {
    //             msg = "success";
    //             break;
    //         } else {
    //             msg = "비밀번호가 다릅니다."
    //             break;
    //         }
    //     } 
    // }
    // if ( msg == "" ) msg = "아이디가 존재하지 않습니다.";

    // console.log(msg);

    // if (msg == "sucess") {
    //     res.render("profile", req.body);
    // } else {
    //     res.render("login");
    // }

    let flag = false;

    for (let i = 0; i < info.length; i++) {
        if (req.body.id == info[i][0] && req.body.pw == info[i][1]) {
            flag = true;
            break;
        }
    }

    if (flag) {
        res.render("profile", req.body);
    } else {
        res.redirect("/user/login");
    }
}

exports.modify = (req, res) => {
    // console.log("modify : ", req.body);
    User.modify_user(req.body);
    res.send(req.body);
}

exports.delete_id = (req, res) => {
    console.log("delete : ", req.body);
    User.delete_user(req.body);
    res.send("탈퇴 되었습니다.");
}
