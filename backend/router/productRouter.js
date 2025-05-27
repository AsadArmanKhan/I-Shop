const express = require("express");
const productRouter = express.Router();
const productController = require("../controller/productController")
const fileupload = require("express-fileupload");
const categoryModel = require("../model/categoryModel");


productRouter.post("/create", fileupload({ createParentPath: true }), productController.create);
productRouter.get("/:id?", productController.getdata);
productRouter.patch("/status/:id", productController.status);
productRouter.delete("/delete/:id", productController.delete);
productRouter.patch("/multiple-images/:id", fileupload({ createParentPath: true }), productController.multiple);
productRouter.put("/update/:id", fileupload({ createParentPath: true }), productController.update),

    module.exports = productRouter; 

