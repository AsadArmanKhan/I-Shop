const mongoose = require('mongoose');

const ShippingAddressSchema = new mongoose.Schema(

    {
        adressLine1: { type: String, required: true },// Required Field
        adressLine2: { type: String, required: false },// optional Field
        city: { type: String, required: true },
        contact: { type: String, default: null },
        state: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
    },
    { _id: false } // id is disable for this Schema
)


const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, "Password is Required"],
            minlength: [6, "Password must be at least 6 digit long"],
        },
        shipping_address: {
            type: [ShippingAddressSchema],
            default: [],
        }

    }
)
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;