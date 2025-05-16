const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    Image: {
        type: String,
        required: null
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // },
    status: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true,
    }
)

const categoryModel = mongoose.model("Category", categorySchema);

module.exports = categoryModel;