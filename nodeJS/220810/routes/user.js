const express = require("express");
const router = express.Router();
const user = require("../controller/UserController");

// register
router.get("/", user.index);
router.post("/register", user.register);

// login
router.get("/login", user.login_page);
router.post("/login", user.login);

router.post("/profile", user.profile);

// edit
router.patch("/edit", user.edit);

// delete
router.delete("/delete", user.delete);

module.exports = router;