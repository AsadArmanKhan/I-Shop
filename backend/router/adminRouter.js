// const colorModel = require("../model/colorModel");
// const adminModel = express.Router();

const express = require("express");
const adminController = require("../controller/adminController");
const adminRouter = express.Router();

adminRouter.post("/login", adminController.login);
// adminRouter.get("/:id?", adminController.getdata);
// colorRouter.patch("/status/:id", colorController.status);
// colorRouter.delete("/delete/:id", colorController.delete);
// colorRouter.put("/update/:id", fileupload({ createParentPath: true }), colorController.update),


module.exports = adminRouter;