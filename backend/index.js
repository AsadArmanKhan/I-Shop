require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const categoryRouter = require("./router/categoryRouter");
const colorRouter = require("./router/colorRouter");
const server = express();
const productRouter = require("./router/productRouter");
const adminRouter = require("./router/adminRouter");
server.use(cors())
server.use(express.json());
server.use("/category", categoryRouter);
server.use("/color", colorRouter);
server.use("/product", productRouter)
server.use("/admin", adminRouter)
server.use(express.static("./public"));

mongoose.connect(process.env.MONGODB,{ dbName: 'Ishop' }).then(
    (res) => {
        server.listen(5000, () => {
            console.log("Server in runng on port no. 5000");
        }
        )
        console.log("Connected to Mongodb ");

    }
).catch(
    (err) => {
        console.log("Error connected to mongodb", err);

    }
);

