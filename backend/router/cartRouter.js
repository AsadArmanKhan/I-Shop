const express = require("express");
const cartRouter = express.Router();
const cartController = require("../controller/cartController");

cartRouter.post("/move-to-db", cartController.moveToDb);
cartRouter.post('/add-to-cart', cartController.getCartByUser);


module.exports = cartRouter;