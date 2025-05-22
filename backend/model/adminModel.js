const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    admin_type: {
        type: String,
        enum: [0, 1, 2, 3, 4], // customize as needed
        default: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const adminModel = mongoose.model('Admin', adminSchema);
module.exports = adminModel;
