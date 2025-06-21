const express = require("express");
const OrderRouter = express.Router();
const OrderController = require("../controller/orderController")


OrderRouter.post("/place-order", OrderController.placeOrder);
// OrderRouter.post("/success", OrderController.orderSuccess);
// OrderRouter.get("/", OrderController.getOrders);
// OrderRouter.get("/get-order-details/:orderId", OrderController.getOrderById);



module.exports = OrderRouter;