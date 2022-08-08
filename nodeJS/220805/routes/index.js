const express = require("express");
const router = express.Router();
const controller = require("../controller/VisitorController");

router.get("/", controller.index);
router.post("/write", controller.post_comment);
router.get("/get", controller.get_visitor);
router.patch("/edit", controller.patch_comment);
router.delete("/delete", controller.delete_comment);

module.exports = router;