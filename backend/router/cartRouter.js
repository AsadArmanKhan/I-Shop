const express = require("express");
const cartRouter = express.Router();
const cartController = require("../controller/cartController");

cartRouter.post("/move-to-db", cartController.moveToDb);

module.exports = cartRouter;
