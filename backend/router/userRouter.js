const express = require("express");
const UserRouter = express.Router();
const userController = require("../controller/userController");

UserRouter.post("/register", userController.register);
UserRouter.post("/login", userController.login);


module.exports = UserRouter;