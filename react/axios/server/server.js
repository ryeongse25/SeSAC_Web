const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

let id = 2;
const todoList = [{
    id: 1,
    text: '할일 1',
    done: false
}];

app.get("/", function(req, res) {
    res.send("Hello World!");
});

app.get("/api/todo", function(req, res) {
    res.json(todoList);
})

app.post("/api/todo", function(req, res) {
    console.log(req.body);
    const {text, done} = req.body;
    todoList.push({
        id: id++,
        text,
        done
    })
    return res.send('success');
})

app.listen(port, () => {
    console.log('Server port : ', port);
})