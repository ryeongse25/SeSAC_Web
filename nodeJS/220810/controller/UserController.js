const models = require("../model");

exports.index = (req, res) => {
    res.render("register");
}

exports.register = (req, res) => {
    console.log(req.body);
    let object = {
        name : req.body.name,
        id: req.body.id,
        pw: req.body.pw,
        email: req.body.email
    }
    models.User.create(object)
    .then((result) => {
        console.log(result);
        res.send("성공적으로 회원가입 되었습니다. 가입하신 정보로 로그인해주세요.");
    })
}

exports.login_page = (req, res) => {
    res.render("login");
}

exports.login = (req, res) => {
    console.log(req.body);
    models.User.findOne({
        where: {id: req.body.id, pw: req.body.pw}
    }).then((result) => {
        console.log(result);
        if (result == null) {
            res.send(false);
        } else {
            res.send(true);
        }
    })
}

exports.profile = (req, res) => {
    console.log(req.body);
    models.User.findOne({
        where: {id: req.body.id}
    }).then((result) => {
        console.log(result);
        res.render("profile", {data: result});
    })
}

exports.edit = (req, res) => {
    console.log(req.body);
    let newObj = {
        name : req.body.name,
        pw: req.body.pw,
        email: req.body.email
    }
    models.User.update(newObj, {where: {id: req.body.id}})
    .then((result) => {
        console.log(result);
        res.send("회원정보가 수정 되었습니다.");
    })
}

exports.delete = (req, res) => {
    console.log(req.body);
    models.User.destroy({where: {id: req.body.id}})
    .then((result) => {
        console.log("delete : ", result );
        res.send("성공적으로 탈퇴되었습니다.");
    })
}