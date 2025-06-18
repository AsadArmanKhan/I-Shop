// const fileupload = require("express-fileupload");
// const categoryRouter = express.Router();
// const categoryController = require("../controller/categoryController")
const express = require("express");
const colorController = require("../controller/colorController");
const colorModel = require("../model/colorModel");
const colorRouter = express.Router();

colorRouter.post("/create", colorController.create);
colorRouter.get("/get/:id", colorController.getOne); // <-- NEW GET BY ID ROUTE
colorRouter.get("/:id?", colorController.getdata);
colorRouter.patch("/status/:id", colorController.status);
colorRouter.delete("/delete/:id", colorController.delete);
colorRouter.put("/update/:id", colorController.update),


module.exports = colorRouter;