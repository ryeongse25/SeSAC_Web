const express = require("express");
const userRouter = express.Router();
const user = require("../controller/UserController");
const multer = require("multer");
const path = require("path");
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, "uploads/");
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, req.body.id + ext);
        }
    }),
    limits: {fileSize : 5*1024*1024},
})

// app.use에서 받은 경로에서 시작
// "/user/" 로 접속 시 UserController의 index 함수를 실행한다.
userRouter.get("/", user.index);
// ~~/register 로 접속 시 UserController의 register 함수를 실행한다.
userRouter.get("/register", user.register); 
userRouter.post("/register", upload.single('userfile'), user.post_register);
userRouter.get("/login", user.login);
userRouter.post("/login", user.post_login);


module.exports = userRouter;