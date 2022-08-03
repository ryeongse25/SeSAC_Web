const express = require("express");
const router = express.Router();
const controller = require("../controller/220725toMVC");

router.get("/", controller.get_main);
router.get("/receive", controller.get_receive);
router.post("/post_receive", controller.post_receive); 

module.exports = router;