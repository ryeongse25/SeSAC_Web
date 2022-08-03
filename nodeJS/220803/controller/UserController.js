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
    
    let flag = false;

    for (let i = 0; i < info.length; i++ ) {
        if (req.body.id == info[i][0] && req.body.pw == info[i][1]) {
            flag = true;
            break;
        }
    }


    console.log("user : ", req.body);

    if (flag) {
        res.render("profile", req.body);
    } else {
        res.redirect("/user/login");
    }

    // if (info[0] != req.body.id) {
    //     res.send("아이디 다름");
    // } else if (info[1] != req.body.pw) {
    //     res.send("비밀번호가 다름");
    // } else {
    //     res.send("로그인 성공!");
    // }
}

exports.modify = (req, res) => {
    console.log("modify : ", req.body);
    User.modify_user(req.body);
    res.send(req.body);
}
