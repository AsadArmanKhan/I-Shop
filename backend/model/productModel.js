const mongoose = require("mongoose");
const { status } = require("../controller/categoryController");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            maxLength: 100,
            unique: true
        },
        slug: {
            type: String,
            maxLength: 200,
            unique: true
        },
        shortDescription: {
            type: String
        },
        longDescription: {
            type: String
        },
        orignalPrice: {
            type: Number,
            default: 1
        },
        discountPercentage: {
            type: String,
            default: 0
        },
        finalPrice: {
            type: String,
            min: 1
        },
        categoryId: {
            type: mongoose.Schema.ObjectId,
            ref: "Category"
        },
        colors: [
            {
                type: mongoose.Schema.ObjectId,
                ref: "Color"
            }
        ],
        thumbnail: {
            type: String,
            default: null
        },
        images: [
            {
                type: String,
            }
        ],
        stock: {
            type: Boolean,
            default: true,
        },
        topSelling: {
            type: Boolean,
            default: false
        },
        status: {
            type: Boolean,
            default: true
        },
    }, { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;