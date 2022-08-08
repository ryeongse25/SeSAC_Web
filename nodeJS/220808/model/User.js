const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'Sesac1234*',
    database: 'sesac'
});

exports.register = (data, cb) => {
    const {name, id, pw, email} = data;

    let sql = `INSERT INTO user VALUES ("${name}", "${id}", "${pw}", "${email}")`;
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        cb( rows );
    })
}

exports.login = (data, cb) => {
    let sql = `SELECT * from user WHERE id = "${data.id}" AND password = "${data.pw}"`;
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        cb( rows );
    })
}

exports.update = (data, cb) =>  {
    let {o_name, o_pw, o_email, o_id, name, pw, email} = data;

    if (name == "") name = o_name;
    if (pw == "") pw = o_pw;
    if (email == "") email = o_email;

    let sql = `UPDATE user SET name = "${name}", password = "${pw}", email = "${email}" WHERE id = "${o_id}"`;
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        cb( rows );
    })
}

exports.delete = (data, cb) =>  {
    let sql = `DELETE from user WHERE id = "${data.id}"`;
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        cb( rows );
    })
}