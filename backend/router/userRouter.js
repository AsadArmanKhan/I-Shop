const express = require("express");
const UserRouter = express.Router();
const UserController = require("../controller/userController")


UserRouter.post("/register", UserController.register);
UserRouter.post("/login", UserController.login);


module.exports = UserRouter;

// const express = require("express");
// const UserRouter = express.Router();
// const userController = require("../controller/userController");

// UserRouter.post("/register", userController.register);
// UserRouter.post("/login", userController.login);


// module.exports = UserRouter;

