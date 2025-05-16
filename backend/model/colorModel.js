const mongoose = require("mongoose");
const { status } = require("../controller/categoryController");

const colorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    hexcode: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })



const colorModel = mongoose.model("Color", colorSchema);
module.exports = colorModel;
