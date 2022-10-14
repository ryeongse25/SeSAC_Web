const models = require("../model");
const crypto = require('crypto');
const bcrypt = require("bcryptjs");

exports.main = (req, res) => {
    res.render("index");
}

exports.register = async (req,res) => {


    const doBcrypt = (password) => {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        return {hash, salt}
    }

    const createHashedPassword = (password) => {
        const salt = crypto.randomBytes(64).toString('base64');
        const hashed = crypto.pbkdf2Sync(password, salt, 10, 64, 'sha512').toString('base64');
        return {hashed, salt};
        // return crypto.createHash("sha512").update(password).digest("base64");
    }

    let hashed = createHashedPassword(req.body.pw);
    let hashedPassword = hashed.hashed;
    let salt = hashed.salt;

    let bcrypted = doBcrypt(req.body.pw);
    let bcryptHash = bcrypted.hash;
    let bcryptSalt = bcrypted.salt;

    console.log(bcryptHash, bcryptSalt);

    let obj = {
        id : req.body.id,
        password: bcryptHash,
        salt: bcryptSalt
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

    const verifyPassword = (password, salt) => {
        const hashed = crypto.pbkdf2Sync(password, salt, 10, 64, 'sha512').toString('base64');
        return hashed;
    }
    // let hashedPassword = verifyPassword(req.body.pw, salt_result.salt);
    let result = await bcrypt.compare(req.body.pw, salt_result.password);

    // if ( salt_result.password === hashedPassword ) {
    //     res.send("로그인 성공");
    // } else {
    //     res.send("로그인 실패");
    // }
    console.log("result", result);
    if (result) {
        res.send("로그인 성공");
    } else {
        res.send("로그인 실패");
    }
}