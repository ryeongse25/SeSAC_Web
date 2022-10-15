const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { setServers } = require("dns");
const port = 8000;

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.send([
        {
            "id": 1,
            "name": "sese",
            "gender": "여자"
        }
    ]);
});

app.listen(port, () => {
    console.log('Server port : ', port);
})