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
    let sql = `SELECT * from user WHERE id = "${data.id}" AND pw = "${data.pw}"`;
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        cb( rows );
    })
}

exports.get_user = (data, cb) => {
    let sql = `SELECT * from user WHERE id = "${data.id}"`
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        cb( rows );
    })
}

exports.update = (data, cb) =>  {
    let sql = `UPDATE user SET name = "${data.name}", pw = "${data.pw}", email = "${data.email}" WHERE id = "${data.id}"`;
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