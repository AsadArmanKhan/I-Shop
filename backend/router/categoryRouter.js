const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controller/categoryController")
const fileupload = require("express-fileupload");
const categoryModel = require("../model/categoryModel");
const adminAuth = require("../middleWare/adminAuth");

categoryRouter.post("/create", [adminAuth, fileupload({ createParentPath: true })], categoryController.create);
categoryRouter.get("/:id?", categoryController.getdata);
categoryRouter.patch("/status/:id", adminAuth, categoryController.status);
categoryRouter.delete("/delete/:id", adminAuth, categoryController.delete);
categoryRouter.put("/update/:id", fileupload({ createParentPath: true }), categoryController.update),


    module.exports = categoryRouter;