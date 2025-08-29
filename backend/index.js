require("dotenv").config();
console.log("SECRET_KEY loaded:", process.env.SECRET_KEY);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const categoryRouter = require("./router/categoryRouter");
const colorRouter = require("./router/colorRouter");
const productRouter = require("./router/productRouter");
const adminRouter = require("./router/adminRouter");
const UserRouter = require("./router/userRouter");
const cartRouter = require("./router/cartRouter");
const OrderRouter = require("./router/orderRouter");
const server = express();
// server.use(cors());
server.use(cors({
  origin: "https://i-shop-1-kb57.onrender.com", // your frontend Render domain
  credentials: true
}));

server.use(express.json());
server.use("/category", categoryRouter);
server.use("/color", colorRouter);
server.use("/product", productRouter);
server.use("/admin", adminRouter);
server.use("/user", UserRouter);
server.use("/cart", cartRouter);
server.use("/order", OrderRouter);
server.use(express.static("./public"));

mongoose
  .connect(process.env.MONGODB, { dbName: "Ishop" })
  .then((res) => {
    server.listen(5000, () => {
      console.log("Server in runng on port no. 5000");
    });
    console.log("Connected to Mongodb ");
  })
  .catch((err) => {
    console.log("Error connected to mongodb", err);
  });
