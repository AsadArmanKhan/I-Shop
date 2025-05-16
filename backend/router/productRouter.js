const express = require("express");
const productRouter = express.Router();
const productController = require("../controller/productController")
const fileupload = require("express-fileupload");
const categoryModel = require("../model/categoryModel");

productRouter.get("/:id?",
    (req, res) => {
        const result = new productController.get(req.params.id)
        result.then(
            (response) => {
                res.send(response)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    }
)


module.exports = productRouter; 

