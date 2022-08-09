const User = require("../model/User");

exports.index = (req, res) => {
    res.render("index");
}

exports.register = (req, res) => {
    console.log(req.body);
    User.register(req.body, function(result) {
        console.log(result);
        res.send("성공적으로 회원가입 되었습니다. 가입하신 정보로 로그인해주세요.");
    });
}

exports.login_page = (req, res) => {
    res.render("login");
}

exports.login = (req, res) => {
    User.login(req.body, function(result) {
        console.log(result);
        if (result.length == 0) {
            res.send(false);
        } else {
            res.send(true);
        }
    });
}

exports.profile = (req, res) => {
    console.log(req.body);
    User.get_user(req.body, function(result) {
        console.log(result);
        res.render("profile", {data: result[0]});
    });
}

exports.edit = (req, res) => {
    // {id: , name: , pw: , email: }
    console.log(req.body);
    User.update(req.body, function(result) {
        console.log(result);
        res.send("회원정보가 수정 되었습니다.");
    });
}

exports.delete = (req, res) => {
    User.delete(req.body, function(result) {
        console.log(result);
        res.send("회원 탈퇴되었습니다.");
    });
}