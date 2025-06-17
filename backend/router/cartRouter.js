const express = require("express");
const CartRouter = express.Router();
const CartController = require("../controller/cartController")


CartRouter.post("/move-to-db", CartController.moveTodb);
CartRouter.post("/add-to-cart", CartController.addToCart)


module.exports = CartRouter;