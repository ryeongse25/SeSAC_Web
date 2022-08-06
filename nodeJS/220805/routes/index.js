const express = require("express");
const router = express.Router();
const controller = require("../controller/VisitorController");

router.get("/", controller.index);
router.post("/write", controller.post_comment);
router.post("/edit", controller.edit_comment);
router.post("/delete", controller.delete_comment);

module.exports = router;