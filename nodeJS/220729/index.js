const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const upload = multer({
    storage: multer.diskStorage({
        // destination : 폴더명
        // done은 콜백함수
        destination(req, file, done) {
            // 원하는 값을 두번째로 보내야해서 null 값을 보낸 것
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            // file.originalname의 확장자 (ex .png)
            const ext = path.extname(file.originalname);
            // path.basename(file.originalname, ext) > file.originalname에서 ext 제외 후 추출
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        }
    }),
    // 5MB
    limits: {fileSize : 5*1024*1024},
})

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", test, test2, function(req, res) {
    res.render("index");
})

// 일반 input file 한 개
// upload.single('userfile') > name이 userfile인 파일 한 개만 올리겠다.
app.post("/upload", upload.single('userfile'), function(req, res) {
    console.log(req.body);
    // 파일의 정보
    console.log(req.file);
    res.send("Upload");
})

// multiple 속성이 있는 input
app.post("/upload/array", upload.array("userfile"), function(req, res) {
    console.log(req.body);
    // 파일의 정보가 req.files에 담긴다
    console.log(req.files);
    res.send("Upload Array");
})

// input[type="file"] tag가 여러 개 있을 때
app.post("/upload/fields", upload.fields([{name: 'userfile1'}, {name: 'userfile2'}, {name: 'userfile3'}]), function(req, res) {
    console.log(req.body);
    // 파일의 정보가 req.files에 담긴다
    console.log(req.files);
    res.send("Upload Fields");
})

function test(req, res, next) {
    console.log("test function");
    console.log(req.path);
    req.aaa = "----";
    next();
}

function test2(req, res, next) {
    console.log("test2 function");
    console.log(req.aaa);
    next();
}

app.listen(port, () => {
    console.log("Server Port : ", port);
})