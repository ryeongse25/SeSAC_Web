// callback 방식

const http = require("http");
const fs = require('fs');

const server = http.createServer(function(req, res) {
    const data = fs.readFile('./test.html', (err, data) => {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        res.end(data);
    });
})

server.listen(8080, function() {
    console.log("8080번 포트");
})

// promise 방식

// const http = require("http");
// const fs = require('fs').promises;

// const server = http.createServer(async function(req, res) {

//     try {
//         const data = await fs.readFile('./test.html');
//         res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
//         res.end(data);
//     } catch(err) {
//         console.error(err);
//         res.writeHead(404);
//         res.end(err.message);
//     }
// })

// server.listen(8080, function() {
//     console.log("8080번 포트");
// })