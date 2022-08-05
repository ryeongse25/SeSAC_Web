const mysql = require("mysql");

// db 연결 함수
const cnn = mysql.createConnection({
    // server면 ip주소
    host: 'localhost',
    user: 'user',
    password: 'Sesac1234*',
    database: 'sesac'
});

// get_visitors의 cb함수로 VisitorController의 index함수에서 보낸 function(result)가 들어온다.
// 그래서 result에 parameter로 rows가 보내진다.
exports.get_visitors = (cb) => {
    // cnn.query는 callback방식
    cnn.query('SELECT * FROM visitor', (err, rows) => {
        if (err) throw err;
        console.log("SELECT * FROM visitor : ", rows);
        cb(rows);
    })
}


exports.insert = (name, comment, cb) => {
    let sql = "INSERT INTO visitor (name, comment) VALUES ('" + name + "', '" + comment + "')";
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        console.log("INSERT : ", rows);
        cb( rows.insertId );
    })
}

exports.update = (name, comment, id, cb) => {
    let sql = "UPDATE visitor SET name = '" + name + "', comment = '" + comment + "' WHERE id = '" + id + "'";
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        console.log("INSERT : ", rows);
        cb( id );
    })
}