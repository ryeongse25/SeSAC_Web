const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, "uploads/");
        },
        filename(req, file, done) {
            console.log(req.body);
            const ext = path.extname(file.originalname);
            done(null, req.body.id + ext);
        }
    }),
    limits: {fileSize : 5*1024*1024},
})

app.set("view engine", "ejs");
app.use(express.static("uploads"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.render("practice36");
})

app.post("/upload", upload.single('userfile'), function(req, res) {
    // console.log(req.body);
    console.log(req.file);
    res.render("upload_page", req.file);
    // res.render("upload_page", {filename : req.file.filename}); 도 가능
    // res.send()로 이미지를 바로 띄우는 방법도 있을까?
    // const img = req.file.filename;
    // res.sendFile(req.file.filename);
})

app.listen(port, () => {
    console.log("Server Port : ", port);
})