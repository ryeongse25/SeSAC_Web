const express = require("express");
const profileRouter = express.Router();
const user = require("../controller/UserController");

profileRouter.post("/", user.post_login);
profileRouter.post("/modify", user.modify);
profileRouter.post("/delete", user.delete_id);

module.exports = profileRouter;