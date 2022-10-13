const models = require("../model");
const crypto = require('crypto');

exports.main = (req, res) => {
    res.render("index");
}

exports.register = async (req,res) => {

    const createHashedPassword = (password) => {
        const salt = crypto.randomBytes(64).toString('base64');
        const hashed = crypto.pbkdf2Sync(password, salt, 10, 64, 'sha512').toString('base64');
        return {hashed, salt};
        // return crypto.createHash("sha512").update(password).digest("base64");
    }

    let hashed = createHashedPassword(req.body.pw);
    let hashedPassword = hashed.hashed;
    let salt = hashed.salt;
    
    console.log("register-salt", salt);

    let obj = {
        id : req.body.id,
        password: hashedPassword,
        salt: salt
    }
    let result = await models.User.create(obj);
    console.log(result);
    res.render("login");
}

exports.loginPage = (req, res) => {
    res.render("login");
}

exports.postLogin = async (req, res) => {
    let salt_result = await models.User.findOne({where: {id : req.body.id}});
    console.log("salt", salt_result.salt);
    const verifyPassword = (password, salt) => {
        const hashed = crypto.pbkdf2Sync(password, salt, 10, 64, 'sha512').toString('base64');
        return hashed;
    }
    let hashedPassword = verifyPassword(req.body.pw, salt_result.salt);
    console.log("hP", hashedPassword)

    if ( salt_result.password === hashedPassword ) {
        res.send("로그인 성공");
    } else {
        res.send("로그인 실패");
    }
}